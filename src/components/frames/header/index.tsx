import { URL_PAGES } from '@/constants/url';
import { Link } from '@tanstack/react-router';

import styles from './index.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={URL_PAGES.HOME} className={styles.logo} title='Главная'>
        H - банк
      </Link>
      <nav className={styles.nav}>
        <Link to={URL_PAGES.MY_REQUESTS}>Мои заявки</Link>
        <Link to={URL_PAGES.CREATE_REQUEST}>Подать заявку</Link>
      </nav>
    </header>
  );
};

export default Header;
