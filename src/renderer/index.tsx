import { ThemeProvider } from '@/app/providers/ThemeProvider/ui/ThemeProvider';
import { createRoot } from 'react-dom/client';
import { MemoryRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';
import App from './app/App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <StoreProvider>
    <MemoryRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </MemoryRouter>
  </StoreProvider>,
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
