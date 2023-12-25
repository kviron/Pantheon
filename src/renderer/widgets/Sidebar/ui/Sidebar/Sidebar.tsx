import { Navbar } from '@/widgets/Navbar';
import { FC } from 'react';
import styles from './Sidebar.module.scss';

export interface SidebarProps {
  children?: any;
}

export const Sidebar: FC<SidebarProps> = () => {
  return (
    <aside data-testid="sidebar" className={styles.sidebar}>
      <Navbar />
    </aside>
  );
};
