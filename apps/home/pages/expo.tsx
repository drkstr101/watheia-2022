import { GetStaticProps } from 'next';

import Header from '@watheia/components/header';
import Layout from '@watheia/components/layout';
import Page from '@watheia/components/page';
import SponsorsGrid from '@watheia/components/sponsors-grid';

import { getAllSponsors } from '@watheia/api/cms-api';
import { META_DESCRIPTION } from '@watheia/api/constants';
import { Sponsor } from '@watheia/model';

type Props = {
  sponsors: Sponsor[];
};

export default function ExpoPage({ sponsors }: Props) {
  const meta = {
    title: 'Expo - Virtual Event Starter Kit',
    description: META_DESCRIPTION,
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="Expo" description={meta.description} />
        <SponsorsGrid sponsors={sponsors} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const sponsors = await getAllSponsors();

  return {
    props: {
      sponsors,
    },
    revalidate: 60,
  };
};
