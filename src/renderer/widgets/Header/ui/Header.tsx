import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { Flex, Input } from '@mantine/core';
import { FC } from 'react';

export interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  return (
    <Flex>
      <Input.Wrapper>
        <Input />
      </Input.Wrapper>
      <ThemeSwitcher size="lg" color="gray" />
    </Flex>
  );
};
