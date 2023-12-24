import { app, Menu } from 'electron';
import { APP_NAME } from '../../renderer/shared/const/app';

export const contextMenu = Menu.buildFromTemplate([
  { label: APP_NAME, type: 'normal' },
  { label: 'Item2', type: 'normal' },
  { label: 'Item3', type: 'normal' },
  {
    label: 'Выход',
    type: 'normal',
    icon: '',
    click: () => {
      app.quit();
    },
  },
]);
