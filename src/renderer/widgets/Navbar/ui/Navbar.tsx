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
import { useTranslation } from 'react-i18next';
import { NavLink as RouteNavLink, useLocation } from 'react-router-dom';

export interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  const location = useLocation();
  const activeLink = location.pathname;
  const { t, i18n } = useTranslation();

  return (
    <>
      <NavLink
        to={getRouteMain()}
        label={t('Main')}
        component={RouteNavLink}
        leftSection={<IconHome2 size="1rem" stroke={1.5} />}
        active={activeLink === getRouteMain()}
      />
      <NavLink
        to={getRouteDownloads()}
        label="Загрузки"
        component={RouteNavLink}
        leftSection={<IconDownload size="1rem" stroke={1.5} />}
        active={activeLink === getRouteDownloads()}
      />
      <NavLink
        to={getRouteGames()}
        label="Игры"
        component={RouteNavLink}
        leftSection={<IconDeviceGamepad2 size="1rem" stroke={1.5} />}
        active={activeLink === getRouteGames()}
      />
      <NavLink
        to={getRouteMods()}
        label="Моды"
        component={RouteNavLink}
        leftSection={<IconListDetails size="1rem" stroke={1.5} />}
        active={activeLink === getRouteMods()}
      />
      <NavLink
        to={getRouteSettings()}
        label="Настройки"
        component={RouteNavLink}
        leftSection={<IconSettings size="1rem" stroke={1.5} />}
        active={activeLink === getRouteSettings()}
      />
      <NavLink
        label="Переключатель языка"
        leftSection={<IconSettings size="1rem" stroke={1.5} />}
        onClick={() => {
          i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
        }}
      />
    </>
  );
};
