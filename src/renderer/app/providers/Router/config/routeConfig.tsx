import { DownloadsPage } from '@/pages/DownloadsPage';
import { GamesPage } from '@/pages/GamesPage';
import { MainPage } from '@/pages/MainPage';
import { ModsPage } from '@/pages/ModsPage';
import { SettingPage } from '@/pages/SettingsPage/ui/SettingPage';
import { AppRoutesProps } from '@/shared/types/router';
import {
  AppRoutes,
  getRouteDownloads,
  getRouteForbidden,
  getRouteGames,
  getRouteMain,
  getRouteMods,
  getRouteProfile,
  getRouteSettings,
} from '@/shared/const/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.SETTINGS]: {
    path: getRouteSettings(),
    element: <SettingPage />,
  },
  [AppRoutes.GAMES]: {
    path: getRouteGames(),
    element: <GamesPage />,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <div>профиль</div>,
    authOnly: true,
  },
  [AppRoutes.MODS]: {
    path: getRouteMods(),
    element: <ModsPage />,
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <div>Запрещено открывать</div>,
  },
  [AppRoutes.DOWNLOADS]: {
    path: getRouteDownloads(),
    element: <DownloadsPage />,
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <div>404</div>,
  },
};
