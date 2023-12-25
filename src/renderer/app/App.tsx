import { AppRouter } from '@/app/providers/Router';
import { Frame } from '@/widgets/Frame';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { Header } from '@/widgets/Header';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar/Sidebar';
import { Suspense } from 'react';
import '@mantine/core/styles.css';
import './App.scss';

export default function App() {
  return (
    <Suspense fallback="">
      <MainLayout
        frame={<Frame />}
        header={<Header />}
        content={<AppRouter />}
        sidebar={<Sidebar />}
      />
    </Suspense>
  );
}
