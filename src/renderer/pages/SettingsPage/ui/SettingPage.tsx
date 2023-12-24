import { Title } from '@mantine/core';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export interface SettingPageProps {}

export const SettingPage: FC<SettingPageProps> = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Title>{t('Настройки')}</Title>
    </div>
  );
};
