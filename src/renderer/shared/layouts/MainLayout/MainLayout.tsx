import classNames from 'classnames';
import { memo, ReactElement } from 'react';
import cls from './MainLayout.module.scss';

interface MainLayoutProps {
  frame: ReactElement;
  header: ReactElement;
  content: ReactElement;
  sidebar: ReactElement;
}

export const MainLayout = memo((props: MainLayoutProps) => {
  const { content, header, sidebar, frame } = props;

  return (
    <>
      <div className={cls.frame} id="frame">
        {frame}
      </div>
      <div>
        <div className={classNames(cls.MainLayout, cls.container)}>
          <div className={cls.header}>{header}</div>
          <div className={cls.sidebar}>{sidebar}</div>
          <div className={cls.content}>{content}</div>
        </div>
      </div>
    </>
  );
});
