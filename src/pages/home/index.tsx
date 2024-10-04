import { URL_PAGES } from '@/constants/url';
import { Link } from '@tanstack/react-router';
import { Toaster } from 'react-hot-toast';

import styles from './index.module.scss';

const HomePage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.intro}>
        <h1>H - банк</h1>
        <h2>
          Мы предоставляем удобные и быстрые способы подачи заявок на кредиты
          онлайн.
        </h2>
        <h2>
          Сэкономьте время и получите доступ к различным кредитным продуктам
          прямо из дома.
        </h2>
        <Link to={URL_PAGES.CREATE_REQUEST}>Подать заявку</Link>
        <Toaster />
      </section>
    </main>
  );
};

export default HomePage;
