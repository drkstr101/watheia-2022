import { SkipNavContent } from '@reach/skip-nav';
import { getUserByUsername } from '@watheia/api/db-api';
import { GetStaticPaths, GetStaticProps } from 'next';
import Error from 'next/error';
import Head from 'next/head';

import {
  META_DESCRIPTION,
  SAMPLE_TICKET_NUMBER,
  SITE_NAME,
  SITE_URL,
} from '@watheia/api/constants';
import ConfContent from '@watheia/components/index';
import Page from '@watheia/components/page';

type Props = {
  username: string | null;
  usernameFromParams: string | null;
  name: string | null;
  ticketNumber: number | null;
};

export default function TicketShare({
  username,
  ticketNumber,
  name,
  usernameFromParams,
}: Props) {
  if (!ticketNumber) {
    return <Error statusCode={404} />;
  }

  const meta = username
    ? {
        title: `${name}’s ${SITE_NAME} Ticket`,
        description: META_DESCRIPTION,
        image: `/api/ticket-images/${username}`,
        url: `${SITE_URL}/tickets/${username}`,
      }
    : {
        title: 'Ticket Demo - Virtual Event Starter Kit',
        description: META_DESCRIPTION,
        image: `/api/ticket-images/${usernameFromParams}`,
        url: `${SITE_URL}/tickets/${usernameFromParams}`,
      };

  return (
    <Page meta={meta}>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <SkipNavContent />
      <ConfContent
        defaultUserData={{
          username: username || undefined,
          name: name || '',
          ticketNumber,
        }}
        sharePage
      />
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const username = params?.username?.toString() || null;
  let name: string | null | undefined;
  let ticketNumber: number | null | undefined;

  if (username) {
    const user = await getUserByUsername(username);
    name = user.name ?? user.username;
    ticketNumber = user.ticketNumber;
  }
  return {
    props: {
      username: ticketNumber ? username : null,
      usernameFromParams: username || null,
      name: ticketNumber ? name || username || null : null,
      ticketNumber: ticketNumber || SAMPLE_TICKET_NUMBER,
    },
    revalidate: 5,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return Promise.resolve({
    paths: [],
    fallback: 'blocking',
  });
};
