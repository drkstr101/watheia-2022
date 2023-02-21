import { SkipNavContent } from '@reach/skip-nav';
import { useRouter } from 'next/router';

import { META_DESCRIPTION } from '@watheia/api/constants';
import ConfContent from '@watheia/components/index';
import Page from '@watheia/components/page';

export default function Conf() {
  const { query } = useRouter();
  const meta = {
    title: 'Demo - Virtual Event Starter Kit',
    description: META_DESCRIPTION,
  };
  const ticketNumber = query.ticketNumber?.toString();
  const defaultUserData = {
    id: query.id?.toString(),
    ticketNumber: ticketNumber ? parseInt(ticketNumber, 10) : undefined,
    name: query.name?.toString(),
    username: query.username?.toString(),
  };

  return (
    <Page meta={meta} fullViewport>
      <SkipNavContent />
      <ConfContent
        defaultUserData={defaultUserData}
        defaultPageState={query.ticketNumber ? 'ticket' : 'registration'}
      />
    </Page>
  );
}
