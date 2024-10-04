import { URL_PAGES } from '@/constants/url';
import { Link } from '@tanstack/react-router';

import styles from './index.module.scss';
import { SearchX } from 'lucide-react';

const NotFound = () => {
  return (
    <div className={styles.not_found}>
      <SearchX strokeWidth={3} size={52} />
      <h1>Не удалось найти данную страницу</h1>
      <h1>{document.location.pathname}</h1>
      <Link to={URL_PAGES.HOME}>На главную</Link>
    </div>
  );
};

export default NotFound;
