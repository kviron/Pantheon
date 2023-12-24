import { Navbar } from '@/widgets/Navbar';
import { FC } from 'react';

export interface SidebarProps {
  children?: any;
}

export const Sidebar: FC<SidebarProps> = () => {
  return (
    <aside data-testid="sidebar">
      <Navbar />
    </aside>
  );
};
