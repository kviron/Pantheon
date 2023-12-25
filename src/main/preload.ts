// Disable no-unused-vars, broken for spread args
import { MantineColorScheme } from '@mantine/core/lib/core/MantineProvider/theme.types';
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
};

const themeModeHandler = {
  setTheme: (theme: MantineColorScheme) =>
    ipcRenderer.invoke('theme-mode:set', theme),
  toggle: () => ipcRenderer.invoke('theme-mode:toggle'),
  system: () => ipcRenderer.invoke('theme-mode:system'),
};

contextBridge.exposeInMainWorld('electron', electronHandler);
contextBridge.exposeInMainWorld('themeMode', themeModeHandler);

export type ElectronHandler = typeof electronHandler;
export type ThemeModeHandler = typeof themeModeHandler;
