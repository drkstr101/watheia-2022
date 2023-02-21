import {
  selectIsConnectedToRoom,
  useHMSActions,
  useHMSStore,
} from '@100mslive/react-sdk';
import { useRouter } from 'next/router';
import React from 'react';
import Join from './Join';
import { getToken } from './lib/getToken';
import Live from './Live';

interface Props {
  coursePeers: string[];
  backstagePeers: string[];
  roomId: string;
}

/**
 * Entry components for 100ms
 */
const Room = ({ roomId, coursePeers, backstagePeers }: Props) => {
  const router = useRouter();
  const [token, setToken] = React.useState('');
  const actions = useHMSActions();
  const isConnected = useHMSStore(selectIsConnectedToRoom);
  React.useEffect(() => {
    if (!router.isReady) return;
    const role = router.query.role ? (router.query.role as string) : 'viewer';
    getToken(role, roomId)
      .then((t) => setToken(t))
      .catch((e) => console.error(e));
  }, [roomId, backstagePeers, coursePeers, router.query, router.isReady]);
  React.useEffect(() => {
    window.onunload = () => {
      actions.leave();
    };
  }, [actions]);
  return (
    <>
      {isConnected ? (
        <Live />
      ) : (
        <Join
          role={router.query.role ? (router.query.role as string) : 'viewer'}
          token={token}
        />
      )}
    </>
  );
};

export default Room;
