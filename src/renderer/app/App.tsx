import { AppRouter } from '@/app/providers/Router';
import {
  getRouteForbidden,
  getRouteMain,
  getRouteSettings,
} from '@/shared/const/router';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { Header } from '@/widgets/Header';
import { Suspense } from 'react';
import './styles/themes/lara-dark-blue/theme.scss';
import 'primeicons/primeicons.css';
import './App.scss';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <Suspense fallback="">
      <MainLayout
        header={<Header />}
        content={<AppRouter />}
        sidebar={
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to={getRouteMain()}>Главная</Link>
            <Link to={getRouteSettings()}>Настройки</Link>
            <Link to={getRouteForbidden()}>недоступен</Link>
          </div>
        }
      />
    </Suspense>
  );
}
