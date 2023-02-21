import {
  IS_CAPTCHA_ENABLED,
  validateCaptchaResult,
} from '@watheia/api/captcha';
import { COOKIE } from '@watheia/api/constants';
import {
  createUser,
  getTicketNumberByUserId,
  getUserById,
} from '@watheia/api/db-api';
import { emailToId } from '@watheia/api/user-api';
import { ConfUser } from '@watheia/model';
import cookie from 'cookie';
import ms from 'ms';
import { nanoid } from 'nanoid';
import { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';

type ErrorResponse = {
  error: {
    code: string;
    message: string;
  };
};

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse<ConfUser | ErrorResponse>
) {
  if (req.method !== 'POST') {
    return res.status(501).json({
      error: {
        code: 'method_unknown',
        message: 'This endpoint only responds to POST',
      },
    });
  }

  const email: string = ((req.body.email as string) || '').trim().toLowerCase();
  const token: string = req.body.token as string;
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      error: {
        code: 'bad_email',
        message: 'Invalid email',
      },
    });
  }

  if (IS_CAPTCHA_ENABLED) {
    const isCaptchaValid = await validateCaptchaResult(token);

    if (!isCaptchaValid) {
      return res.status(400).json({
        error: {
          code: 'bad_captcha',
          message: 'Invalid captcha',
        },
      });
    }
  }

  let id = nanoid();
  let ticketNumber: number;
  let createdAt: number = Date.now();
  let statusCode = 200;
  let name: string | null | undefined = undefined;
  let username: string | null | undefined = undefined;

  id = emailToId(email);
  const existingTicketNumberString = await getTicketNumberByUserId(id);

  if (existingTicketNumberString) {
    const user = await getUserById(id);
    name = user.name;
    username = user.username;
    ticketNumber = parseInt(existingTicketNumberString, 10);
    createdAt = user.createdAt!;
    statusCode = 200;
  } else {
    const newUser = await createUser(id, email);
    ticketNumber = newUser.ticketNumber!;
    createdAt = newUser.createdAt!;
    statusCode = 201;
  }

  // Save `key` in a httpOnly cookie
  res.setHeader(
    'Set-Cookie',
    cookie.serialize(COOKIE, id, {
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production',
      path: '/api',
      expires: new Date(Date.now() + ms('7 days')),
    })
  );

  return res.status(statusCode).json({
    id,
    email,
    ticketNumber,
    createdAt,
    name,
    username,
  });
}
