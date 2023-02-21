import { SAMPLE_TICKET_NUMBER } from '@watheia/api/constants';
import { ConfUser } from '@watheia/api/types';

import * as redisApi from './db-providers/redis';
import * as supabaseApi from './db-providers/supabase';

let dbApi: {
  createUser: (id: string, email: string) => Promise<ConfUser>;
  getUserByUsername: (username: string) => Promise<ConfUser>;
  getUserById: (id: string) => Promise<ConfUser>;
  getTicketNumberByUserId: (id: string) => Promise<string | null>;
  createGitHubUser: (user: any) => Promise<string>;
  updateUserWithGitHubUser: (
    id: string,
    token: string,
    ticketNumber: string
  ) => Promise<ConfUser>;
};

if (
  process.env.REDIS_PORT &&
  process.env.REDIS_URL &&
  process.env.EMAIL_TO_ID_SECRET
) {
  dbApi = redisApi;
} else if (
  process.env.SUPABASE_URL &&
  process.env.SUPABASE_SERVICE_ROLE_SECRET &&
  process.env.EMAIL_TO_ID_SECRET
) {
  dbApi = supabaseApi;
} else {
  dbApi = {
    createUser: () => Promise.resolve({ ticketNumber: SAMPLE_TICKET_NUMBER }),
    getUserByUsername: () =>
      Promise.resolve({ ticketNumber: SAMPLE_TICKET_NUMBER }),
    getUserById: () => Promise.resolve({ ticketNumber: SAMPLE_TICKET_NUMBER }),
    getTicketNumberByUserId: () => Promise.resolve(null),
    createGitHubUser: () => Promise.resolve(''),
    updateUserWithGitHubUser: () =>
      Promise.resolve({ ticketNumber: SAMPLE_TICKET_NUMBER }),
  };
}

export async function createUser(id: string, email: string): Promise<ConfUser> {
  return dbApi.createUser(id, email);
}

export async function getUserByUsername(username: string): Promise<ConfUser> {
  return dbApi.getUserByUsername(username);
}

export async function getUserById(id: string): Promise<ConfUser> {
  return dbApi.getUserById(id);
}

export async function getTicketNumberByUserId(
  id: string
): Promise<string | null> {
  return dbApi.getTicketNumberByUserId(id);
}

export async function createGitHubUser(user: any): Promise<string> {
  return dbApi.createGitHubUser(user);
}

export async function updateUserWithGitHubUser(
  id: string,
  token: string,
  ticketNumber: string
): Promise<ConfUser> {
  return dbApi.updateUserWithGitHubUser(id, token, ticketNumber);
}
