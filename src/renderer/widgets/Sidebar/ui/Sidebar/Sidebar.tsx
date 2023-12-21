import { Button } from 'primereact/button';
import { FC, useState } from 'react';

export interface SidebarProps {
  children: any;
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { children } = props;

  const [, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside data-testid="sidebar">
      {children}
      <Button onClick={onToggle}>toggle</Button>
    </aside>
  );
};
