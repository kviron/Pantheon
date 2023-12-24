import { Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div data-testid="MainPage">
      <Title>{t('Главная страница')}</Title>
    </div>
  );
};

export default MainPage;
