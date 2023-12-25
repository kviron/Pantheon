import { Container } from '@mantine/core';
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
        <div className={classNames(cls.MainLayout)}>
          <div className={cls.header}>
            <Container px="md" fluid>
              {header}
            </Container>
          </div>
          <div className={cls.sidebar}>{sidebar}</div>
          <div className={cls.content}>
            <Container px="md" fluid>
              {content}
            </Container>
          </div>
        </div>
      </div>
    </>
  );
});
