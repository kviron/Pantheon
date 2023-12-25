import { Title } from '@mantine/core';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export interface DownloadsPageProps {}

export const DownloadsPage: FC<DownloadsPageProps> = () => {
  const { t } = useTranslation();

  return <Title>{t('Загрузки')}</Title>;
};
