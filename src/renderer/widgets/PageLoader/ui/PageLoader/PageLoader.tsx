import cl from 'classnames';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={cl(cls.PageLoader, {}, [className])}>...Загрузка</div>
);
