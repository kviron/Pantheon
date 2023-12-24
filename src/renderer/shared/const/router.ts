export enum AppRoutes {
  MAIN = 'main',
  SETTINGS = 'settings',
  PROFILE = 'profile',
  FORBIDDEN = 'forbidden',
  GAMES = 'games',
  MODS = 'mods',
  DOWNLOADS = 'downloads',
  // last
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteSettings = () => `/${AppRoutes.SETTINGS}`;
export const getRouteMods = () => `/${AppRoutes.MODS}`;
export const getRouteProfile = (id: string) => `/${AppRoutes.PROFILE}/${id}`;
export const getRouteForbidden = () => `/${AppRoutes.FORBIDDEN}`;
export const getRouteGames = () => `/${AppRoutes.GAMES}`;
export const getRouteDownloads = () => `/${AppRoutes.DOWNLOADS}`;
