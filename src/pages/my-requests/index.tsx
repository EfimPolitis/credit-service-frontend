import SearchForm from '@/components/frames/forms/search-form';
import styles from './index.module.scss';

const MyRequestsPage = () => {
  return (
    <div className={styles.page}>
      <SearchForm />
    </div>
  );
};

export default MyRequestsPage;
