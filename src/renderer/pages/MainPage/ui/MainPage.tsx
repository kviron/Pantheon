import { Typography } from '@/shared/ui/Typography';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div data-testid="MainPage">
      <Typography variant="h1">{t('Главная страница')}</Typography>
    </div>
  );
};

export default MainPage;
