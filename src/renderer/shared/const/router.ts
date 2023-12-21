export enum AppRoutes {
  MAIN = 'main',
  SETTINGS = 'settings',
  PROFILE = 'profile',
  FORBIDDEN = 'forbidden',
  GAMES = 'games',
  DOWNLOADS = 'downloads',
  // last
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteSettings = () => '/settings';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteForbidden = () => '/forbidden';
export const getRouteGames = () => '/games';
export const getRouteDownloads = () => '/downloads';
