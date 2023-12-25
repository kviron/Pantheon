import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Flex, Input } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { FC } from 'react';

export interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <Flex>
      <Input.Wrapper>
        <Input size="xs" leftSection={<IconSearch size={16} />} />
      </Input.Wrapper>
      <ThemeSwitcher size="lg" color="gray" />
    </Flex>
  );
};
