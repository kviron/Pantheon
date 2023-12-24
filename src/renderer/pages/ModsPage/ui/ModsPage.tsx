import { Title } from '@mantine/core';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export interface ModsPageProps {}

export const ModsPage: FC<ModsPageProps> = () => {
  const { t } = useTranslation();
  return <Title>{t('Страница модов')}</Title>;
};
