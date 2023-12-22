import { AppRouter } from '@/app/providers/Router';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar/Sidebar';
import { Suspense } from 'react';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import './App.scss';

export default function App() {
  return (
    <Suspense fallback="">
      <MainLayout
        header={<Header />}
        content={<AppRouter />}
        sidebar={<Sidebar />}
      />
    </Suspense>
  );
}
