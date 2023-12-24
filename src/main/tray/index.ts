import { app, nativeImage, Tray } from 'electron';
import { APP_NAME } from '../../renderer/shared/const/app';
import { contextMenu } from './contextMenu';

export const createTray = () => {
  const icon = nativeImage.createFromPath('assets/icon.png');
  const tray = new Tray(icon);

  tray.setContextMenu(contextMenu);
  tray.setToolTip(APP_NAME);
  tray.on('click', () => {
    app.focus();
    app.show();
  });
};
