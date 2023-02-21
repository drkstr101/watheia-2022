import { PropsWithChildren } from 'react';

const IconButton = ({
  active = false,
  onClick,
  children,
}: PropsWithChildren<{ active?: boolean; onClick?: () => void }>) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center p-1 rounded-md ${
        active ? 'bg-white text-black' : 'icon-btn'
      }`}
      type="button"
    >
      {children}
    </button>
  );
};

export default IconButton;
