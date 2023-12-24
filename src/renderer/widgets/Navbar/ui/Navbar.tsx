import {
  getRouteDownloads,
  getRouteGames,
  getRouteMain,
  getRouteMods,
  getRouteSettings,
} from '@/shared/const/router';
import { NavLink } from '@mantine/core';
import {
  IconHome2,
  IconDeviceGamepad2,
  IconSettings,
  IconListDetails,
  IconDownload,
} from '@tabler/icons-react';

import { FC } from 'react';
import { Link } from 'react-router-dom';

export interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  return (
    <>
      <NavLink
        to={getRouteMain()}
        label="Главная"
        component={Link}
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
      />
      <NavLink
        to={getRouteDownloads()}
        label="Загрузки"
        component={Link}
        leftSection={<IconDownload size="1rem" stroke={1.5} />}
      />
      <NavLink
        to={getRouteGames()}
        label="Игры"
        component={Link}
        leftSection={<IconDeviceGamepad2 size="1rem" stroke={1.5} />}
      />
      <NavLink
        to={getRouteMods()}
        label="Моды"
        component={Link}
        leftSection={<IconListDetails size="1rem" stroke={1.5} />}
      />
      <NavLink
        to={getRouteSettings()}
        label="Настройки"
        component={Link}
        leftSection={<IconSettings size="1rem" stroke={1} />}
      />
    </>
  );
};
