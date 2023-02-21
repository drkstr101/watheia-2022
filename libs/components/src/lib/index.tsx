import {
  ConfDataContext,
  PageState,
  UserData,
} from '@watheia/api/hooks/use-conf-data';
import { useState } from 'react';
import ConfContainer from './conf-container';
import Form from './form';
import Hero from './hero';
import Layout from './layout';
import LearnMore from './learn-more';
import Ticket from './ticket';

type Props = {
  defaultUserData: UserData;
  sharePage?: boolean;
  defaultPageState?: PageState;
};

export default function Conf({
  defaultUserData,
  sharePage,
  defaultPageState = 'registration',
}: Props) {
  const [userData, setUserData] = useState<UserData>(defaultUserData);
  const [pageState, setPageState] = useState<PageState>(defaultPageState);

  return (
    <ConfDataContext.Provider
      value={{
        userData,
        setUserData,
        setPageState,
      }}
    >
      <Layout>
        <ConfContainer>
          {pageState === 'registration' && !sharePage ? (
            <>
              <Hero />
              <Form />
              <LearnMore />
            </>
          ) : (
            <Ticket
              username={userData.username}
              name={userData.name}
              ticketNumber={userData.ticketNumber}
              sharePage={sharePage}
            />
          )}
        </ConfContainer>
      </Layout>
    </ConfDataContext.Provider>
  );
}
