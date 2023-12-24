import { Title } from '@mantine/core';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const GamesPage: FC = () => {
  const { t } = useTranslation();

  return <Title>{t('Страница игр')}</Title>;
};
