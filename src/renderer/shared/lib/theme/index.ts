import { themeColors } from '@/shared/lib/theme/colors';
import { MantineThemeOverride } from '@mantine/core/lib/core/MantineProvider/theme.types';

export const themeDefault: MantineThemeOverride = {
  primaryColor: 'red',
  colors: {
    themeColors,
  },
};
