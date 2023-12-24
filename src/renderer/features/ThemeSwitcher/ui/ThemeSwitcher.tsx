import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { ActionIcon } from '@mantine/core';
import { ActionIconProps } from '@mantine/core/lib/components/ActionIcon/ActionIcon';
import { MoonIcon } from '@radix-ui/react-icons';
import { FC } from 'react';

type ThemeSwitcherProps = ActionIconProps & {};

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { toggleColorTheme } = useTheme();

  return (
    <ActionIcon
      onClick={toggleColorTheme}
      size="xs"
      variant="transparent"
      {...props}
    >
      <MoonIcon />
    </ActionIcon>
  );
};
