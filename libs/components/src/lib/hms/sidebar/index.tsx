import { selectLocalPeerRole, useHMSStore } from '@100mslive/react-sdk';
import * as Tabs from '@radix-ui/react-tabs';
import ScheduleSidebar from '@watheia/components/schedule-sidebar-individual';
import { Course } from '@watheia/model';
import Chat from './Chat';
import Participants from './Participants';

type Props = {
  allCourses: Course[];
};

const Sidebar = ({ allCourses }: Props) => {
  const localRole = useHMSStore(selectLocalPeerRole);
  return (
    <Tabs.Root asChild defaultValue="1">
      <div className="sidebar-container">
        <Tabs.List className="w-full px-4 tabs">
          <Tabs.Trigger asChild value="1">
            <button className="w-1/2 text-gray-300 h-[35px] text-[14px] border-solid border border-gray-700 rounded-l-md">
              Chat
            </button>
          </Tabs.Trigger>

          {localRole?.name === 'viewer' || localRole?.name === 'invitee' ? (
            <Tabs.Trigger asChild value="3">
              <button className="w-1/2  text-gray-300 h-[35px] text-[14px] border-solid border border-gray-700 rounded-r-md">
                Schedule
              </button>
            </Tabs.Trigger>
          ) : (
            <Tabs.Trigger asChild value="2">
              <button className="w-1/2  text-gray-300 h-[35px] text-[14px] border-solid border border-gray-700 rounded-r-md">
                Participants
              </button>
            </Tabs.Trigger>
          )}
        </Tabs.List>
        <Tabs.Content asChild value="1">
          <Chat />
        </Tabs.Content>
        <Tabs.Content asChild value="2">
          <Participants />
        </Tabs.Content>
        <Tabs.Content asChild value="3">
          <ScheduleSidebar allCourses={allCourses} />
        </Tabs.Content>
      </div>
    </Tabs.Root>
  );
};

export default Sidebar;
