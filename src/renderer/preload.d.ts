import { ThemeModeHandler, ElectronHandler } from '../main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    themeMode: ThemeModeHandler;
  }
}

export {};
