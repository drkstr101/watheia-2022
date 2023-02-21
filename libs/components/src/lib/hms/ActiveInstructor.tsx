import {
  HMSPeer,
  selectDominantSpeaker,
  selectLocalPeer,
  useHMSStore,
  useVideoList,
} from '@100mslive/react-sdk';
import { useCallback, useEffect, useRef, useState } from 'react';
import { hmsConfig } from './config';
import VideoTile from './VideoTile';

const ActiveInstructor = () => {
  const localPeer = useHMSStore(selectLocalPeer);
  const [activeInstructor, setActiveInstructor] = useState(localPeer);
  const dominantInstructor = useHMSStore(selectDominantSpeaker);

  const peerFilter = (dominantInstructor: HMSPeer) => {
    if (dominantInstructor) {
      setActiveInstructor(dominantInstructor);
    }
  };

  const prevPeer = usePrevious(activeInstructor);

  const getPeer = useCallback(() => {
    if (localPeer.roleName === 'viewer') {
      return prevPeer || localPeer;
    } else {
      return localPeer;
    }
  }, [localPeer, prevPeer]);

  useEffect(() => {
    peerFilter(dominantInstructor || getPeer());
  }, [dominantInstructor, getPeer]);

  const { pagesWithTiles, ref } = useVideoList({
    maxTileCount: 1,
    peers: [activeInstructor],
    aspectRatio: hmsConfig.aspectRatio,
  });
  return (
    <div
      className="py-2"
      style={{
        height:
          'calc((100vh - 3.2 * var(--header-height)) - var(--video-list-height))',
      }}
    >
      <div ref={ref} className="flex justify-center  w-full h-full">
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
    </div>
  );
};

export default ActiveInstructor;

function usePrevious(value: HMSPeer): HMSPeer | undefined {
  const ref = useRef<HMSPeer>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
