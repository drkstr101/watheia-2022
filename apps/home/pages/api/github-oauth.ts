import { createGitHubUser } from '@watheia/api/db-api';
import { renderError, renderSuccess } from '@watheia/api/render-github-popup';
import { NextApiRequest, NextApiResponse } from 'next';
import * as qs from 'querystring';

/**
 * This API route must be triggered as a callback of your GitHub OAuth app.
 */
export default async function githubOAuth(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req.query.code) {
    // This happens when user cancelled the authentication.
    // In this case, we send an empty message which indicates no data available.
    res.end(renderSuccess());
    return;
  }

  const q = qs.stringify({
    client_id: process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID,
    client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
    code: req.query.code,
  });

  const accessTokenRes = await fetch(
    `https://github.com/login/oauth/access_token?${q}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
    }
  );

  if (!accessTokenRes.ok) {
    console.error(
      `Failed to get access token: ${
        accessTokenRes.status
      } ${await accessTokenRes.text()}`
    );
    res.statusCode = 500;
    res.end(renderError());
    return;
  }

  const { access_token: accessToken } = await accessTokenRes.json();

  const userRes = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `bearer ${accessToken as string}`,
    },
  });

  if (!userRes.ok) {
    console.error(
      `Failed to get GitHub user: ${userRes.status} ${await userRes.text()}`
    );
    res.statusCode = 500;
    res.end(renderError());
    return;
  }

  const user = await userRes.json();

  try {
    const token = await createGitHubUser(user);
    res.end(renderSuccess({ type: 'token', token }));
  } catch {
    res.end(
      renderSuccess({ type: 'user', login: user.login, name: user.name })
    );
  }
}
