/* eslint-disable @typescript-eslint/ban-ts-comment */
import { InviteIcon, PersonIcon } from '@100mslive/react-icons';
import { selectLocalPeerRole, useHMSStore } from '@100mslive/react-sdk';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Button from './Button';
import { ChangeRoleDialog } from './demo-cta/room-cta';

const EmptyRoom = () => {
  const role = useHMSStore(selectLocalPeerRole) || { name: 'viewer' };
  const [copied, setCopied] = useState(false);
  const router = useRouter();
  const copy = () => {
    let courseId = `a`;
    if (router.isReady) {
      courseId = router.query.slug as string;
    }

    navigator.clipboard.writeText(
      `${window.location.host}/course/${courseId}?role=${role.name}`
    );
    if (!copied) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
  };
  return (
    <div
      className="flex flex-col justify-center items-center text-center"
      style={{ height: 'calc(100vh - 3.2 * var(--header-height))' }}
    >
      <h2 className="text-3xl ">No Instructors Present</h2>
      <p className="text-gray-300 text-sm">
        Looks like nobody has joined as a instructor. Invite someone to speak or
        change your role.
      </p>
      <div className="flex space-x-4 mt-8">
        <div className="relative">
          {copied ? (
            <p className="absolute top-12 left-0 flex bg-gray-600 justify-center  rounded-lg w-48 p-2">
              Copied to clipboard!
            </p>
          ) : null}
          <Button onClick={() => copy()} variant="secondary">
            <InviteIcon className="mr-2" /> Invite
          </Button>
        </div>

        <ChangeRoleDialog>
          <Button>
            <PersonIcon className="mr-2" /> Change Role
          </Button>
        </ChangeRoleDialog>
      </div>
    </div>
  );
};

export default EmptyRoom;
