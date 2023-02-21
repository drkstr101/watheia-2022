import {
  HMSPeer,
  selectDominantSpeaker,
  selectIsSomeoneScreenSharing,
  selectLocalPeer,
  selectPeers,
  selectPeersByRole,
  useHMSStore,
  useVideoList,
} from '@100mslive/react-sdk';
import React, { useEffect, useState } from 'react';
import { hmsConfig } from './config';
import EmptyRoom from './EmptyRoom';
import MobileView from './mobile';
import Pagination from './Pagination';
import RoleChangeDialog from './request';
import ScreenshareTile from './ScreenshareTile';
import VideoTile from './VideoTile';

const VideoList = () => {
  const activeInstructorThreshold = hmsConfig.activeInstructorThreshold;
  const coursePeers = useHMSStore(selectPeersByRole('course'));
  const peers = useHMSStore(selectPeers);
  const localPeer = useHMSStore(selectLocalPeer);
  const renderPeers = peers.filter((p) => p.roleName !== 'viewer');
  const [activeInstructor, setActiveInstructor] = useState(localPeer);
  const dominantInstructor = useHMSStore(selectDominantSpeaker);
  const isActiveInstructorModeOn =
    activeInstructor && renderPeers.length > activeInstructorThreshold;
  /** here we are using peer filter function to change the activeInstructor and sidebarPeers,
   * on first mount activeInstructor points to the localPeer and on each update it points
   * to the dominantInstructor
   */
  const peerFilter = (dominantInstructor: HMSPeer) => {
    if (dominantInstructor) {
      setActiveInstructor(dominantInstructor);
    }
  };

  useEffect(() => {
    if (dominantInstructor) {
      peerFilter(dominantInstructor);
    } else {
      if (localPeer.roleName === 'viewer' && coursePeers.length > 0) {
        setActiveInstructor(coursePeers[0]);
      }
    }
  }, [dominantInstructor, coursePeers, localPeer.roleName]);
  const isSomeoneScreenSharing = useHMSStore(selectIsSomeoneScreenSharing);

  return (
    <>
      <div
        className="w-full relative md:block hidden"
        style={{ height: 'calc((100vh - 3.2 * var(--header-height))' }}
      >
        {renderPeers.length > 0 ? (
          <>
            {isActiveInstructorModeOn || isSomeoneScreenSharing ? (
              <ActiveInstructor
                allPeers={renderPeers}
                activePeer={activeInstructor}
              />
            ) : (
              <NonActiveInstructorView peers={renderPeers} />
            )}
          </>
        ) : (
          <EmptyRoom />
        )}
      </div>
      <RoleChangeDialog />
      <MobileView allPeers={renderPeers} activePeer={activeInstructor} />
    </>
  );
};

export default VideoList;

const NonActiveInstructorView: React.FC<{ peers: HMSPeer[] }> = ({ peers }) => {
  const { pagesWithTiles, ref } = useVideoList({
    maxColCount: 2,
    maxRowCount: 2,
    maxTileCount: 4,
    peers,
    aspectRatio: hmsConfig.aspectRatio,
  });
  return (
    <div
      ref={ref}
      className="w-full h-full flex flex-wrap place-content-center items-center"
    >
      {pagesWithTiles &&
        pagesWithTiles.length > 0 &&
        pagesWithTiles[0].map((p, _) => (
          <VideoTile
            key={p.peer.id}
            width={p.width}
            height={p.height}
            trackId={p.peer.videoTrack || ''}
          />
        ))}
    </div>
  );
};

const ActiveInstructor: React.FC<{
  activePeer: HMSPeer;
  allPeers: HMSPeer[];
}> = ({ allPeers, activePeer }) => {
  const isSomeoneScreenSharing = useHMSStore(selectIsSomeoneScreenSharing);
  const peers = isSomeoneScreenSharing
    ? allPeers
    : allPeers.filter((peer) => peer.id !== activePeer.id);
  return (
    <>
      {isSomeoneScreenSharing ? (
        <ScreenshareTile />
      ) : (
        <ActiveTile activePeer={activePeer} />
      )}
      <AllInstructors allPeers={peers} />
    </>
  );
};

const ActiveTile: React.FC<{ activePeer: HMSPeer }> = ({ activePeer }) => {
  const { pagesWithTiles, ref } = useVideoList({
    maxTileCount: 1,
    peers: [activePeer],
    aspectRatio: hmsConfig.aspectRatio,
  });
  return (
    <div
      ref={ref}
      className="flex justify-center"
      style={{
        height:
          'calc((100vh - 3.2 * var(--header-height)) - var(--video-list-height))',
      }}
    >
      {pagesWithTiles &&
        pagesWithTiles.length > 0 &&
        pagesWithTiles[0].map((p, _) => (
          <VideoTile
            width={p.width}
            height={p.height}
            trackId={p.peer.videoTrack || ''}
          />
        ))}
    </div>
  );
};

const AllInstructors: React.FC<{ allPeers: HMSPeer[] }> = ({ allPeers }) => {
  const { pagesWithTiles, ref } = useVideoList({
    maxRowCount: 1,
    maxTileCount: hmsConfig.maxTileCountInstructors,
    peers: allPeers,
    aspectRatio: hmsConfig.aspectRatio,
  });
  const [page, setPage] = React.useState(0);
  React.useEffect(() => {
    // currentPageIndex should not exceed pages length
    if (page > pagesWithTiles.length) {
      setPage(0);
    }
  }, [page, pagesWithTiles.length]);
  return (
    <div
      style={{
        height: 'var(--video-list-height)',
      }}
      ref={ref}
      className="relative w-full flex flex-wrap place-content-center items-center"
    >
      {pagesWithTiles &&
        pagesWithTiles.length > 0 &&
        pagesWithTiles[page < pagesWithTiles.length ? page : 0].map((p, _) => (
          <VideoTile
            width={p.width}
            height={p.height}
            trackId={p.peer.videoTrack || ''}
          />
        ))}
      {pagesWithTiles.length > 1 ? (
        <Pagination page={page} setPage={setPage} list={pagesWithTiles} />
      ) : null}
    </div>
  );
};
