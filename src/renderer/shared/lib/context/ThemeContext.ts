import {
  MantineColorScheme,
  MantineThemeOverride,
} from '@mantine/core/lib/core/MantineProvider/theme.types';
import { createContext } from 'react';

export interface ThemeContextProps {
  theme: MantineThemeOverride;
  colorScheme: MantineColorScheme;
  setTheme: (theme: MantineThemeOverride) => void;
  setColorScheme: (scheme: MantineColorScheme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps,
);
