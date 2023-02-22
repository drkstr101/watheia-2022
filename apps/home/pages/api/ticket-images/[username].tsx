// import { SAMPLE_TICKET_NUMBER, SITE_URL } from '@watheia/api/constants';
// import { getUserByUsername } from '@watheia/api/db-api';
// import screenshot from '@watheia/api/screenshot';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function ticketImages(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // let url: string;
  // let name: string | null | undefined;
  // let ticketNumber: number | null | undefined = SAMPLE_TICKET_NUMBER;
  // const { username } = req.query || {};
  // if (username) {
  //   const usernameString = username.toString();
  //   const user = await getUserByUsername(usernameString);
  //   name = user.name;
  //   ticketNumber = user.ticketNumber;
  //   url = `${SITE_URL}/ticket-image?username=${encodeURIComponent(
  //     usernameString
  //   )}&ticketNumber=${encodeURIComponent(
  //     ticketNumber ?? SAMPLE_TICKET_NUMBER
  //   )}`;
  //   if (name) {
  //     url = `${url}&name=${encodeURIComponent(name)}`;
  //   }

  //   const file = await screenshot(url);
  //   res.setHeader('Content-Type', `image/png`);
  //   res.setHeader(
  //     'Cache-Control',
  //     `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`
  //   );
  //   res.statusCode = 200;
  //   res.end(file);
  // } else {
  //   res.status(404).send('Not Found');
  // }

  res.status(404).send('Not Found');
}
