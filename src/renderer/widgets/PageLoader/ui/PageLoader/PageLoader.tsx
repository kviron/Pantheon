import cl from 'classnames';
import { ProgressSpinner } from 'primereact/progressspinner';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={cl(cls.PageLoader, {}, [className])}>
    <ProgressSpinner />
  </div>
);
