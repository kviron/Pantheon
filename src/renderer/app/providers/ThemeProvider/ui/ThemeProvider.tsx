import { LOCAL_STORAGE_COLOR_SCHEME } from '@/shared/const/localstorage';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { themeDefault } from '@/shared/lib/theme';
import { themeColors } from '@/shared/lib/theme/colors';
import {
  MantineColorScheme,
  MantineThemeOverride,
} from '@mantine/core/lib/core/MantineProvider/theme.types';
import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { createTheme, MantineProvider } from '@mantine/core';

const storageColorScheme = localStorage.getItem(
  LOCAL_STORAGE_COLOR_SCHEME,
) as MantineColorScheme;

type ThemeProviderProps = {
  defaultColorScheme?: MantineColorScheme;
  initialTheme?: MantineThemeOverride;
  children: ReactNode;
};

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const { initialTheme, defaultColorScheme, children } = props;

  const [isThemeInited, setThemeInited] = useState(false);
  const [theme, setTheme] = useState<MantineThemeOverride>(
    initialTheme || themeDefault,
  );
  const [colorScheme, setColorScheme] = useState<MantineColorScheme>(
    defaultColorScheme || storageColorScheme || 'auto',
  );

  const context = useMemo(
    () => ({
      theme,
      colorScheme,
      setTheme,
      setColorScheme,
    }),
    [colorScheme, theme],
  );

  useEffect(() => {
    if (!isThemeInited && initialTheme) {
      setTheme(initialTheme);
      setThemeInited(true);
    }
  }, [initialTheme, isThemeInited]);

  // Если схема меняется, то меняем класс у боди и записываем в local storage
  useEffect(() => {
    document.body.className = colorScheme;
    localStorage.setItem(LOCAL_STORAGE_COLOR_SCHEME, colorScheme);
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={context}>
      <MantineProvider theme={theme} defaultColorScheme={colorScheme}>
        {children}
      </MantineProvider>
    </ThemeContext.Provider>
  );
};
