import { MainPage } from '@/pages/MainPage';
import { AppRoutesProps } from '@/shared/types/router';
import {
  AppRoutes,
  getRouteForbidden,
  getRouteMain,
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
    element: <div>настройки</div>,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <div>профиль</div>,
    authOnly: true,
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <div>Запрещено октрывать</div>,
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <div>404</div>,
  },
};
