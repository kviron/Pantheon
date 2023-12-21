import { Typography } from '@/shared/ui/Typography';
import { memo, ReactElement } from 'react';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
  header: ReactElement;
  content: ReactElement;
  sidebar: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { content, header, sidebar } = props;

  return (
    <>
      <div className={cls.frame} id="frame">
        <Typography as="div" fontWeight={800} variant="body2">
          Pantheon
        </Typography>
      </div>
      <div className={cls.header}>{header}</div>
      <div className={cls.MainLayout}>
        <div className={cls.sidebar}>{sidebar}</div>
        <div className={cls.content}>{content}</div>
      </div>
    </>
  );
});
