import {
  MantineColorScheme,
  MantineThemeOverride,
} from '@mantine/core/lib/core/MantineProvider/theme.types';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

interface UseThemeResult {
  colorScheme: MantineColorScheme;
  toggleColorTheme: () => void;
  setColorScheme: (scheme: MantineColorScheme) => void;
  setTheme: (theme: MantineThemeOverride) => void;
}

export function useTheme(): UseThemeResult {
  const { colorScheme, setTheme, setColorScheme } = useContext(ThemeContext);

  const toggleColorTheme = () => {
    let newTheme: MantineColorScheme;

    switch (colorScheme) {
      case 'dark':
        newTheme = 'light';
        break;
      case 'light':
        newTheme = 'dark';
        break;
      default:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        newTheme = 'light';
    }
    setColorScheme(colorScheme);
    window.themeMode.toggle();
  };

  return {
    colorScheme,
    setTheme,
    toggleColorTheme,
    setColorScheme,
  };
}
