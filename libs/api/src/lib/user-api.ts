import crypto from 'crypto';

export async function register(email: string, token?: string) {
  return await fetch('/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, token }),
  });
}

export async function saveGithubToken({
  id,
  token,
}: {
  id?: string;
  token: string;
}) {
  return await fetch('/api/save-github-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id,
      token,
    }),
  });
}

export function emailToId(email: string) {
  if (process.env.EMAIL_TO_ID_SECRET) {
    const hmac = crypto.createHmac('sha1', process.env.EMAIL_TO_ID_SECRET);
    hmac.update(email);
    const result = hmac.digest('hex');
    return result;
  } else {
    throw new Error('EMAIL_TO_ID_SECRET is missing');
  }
}
