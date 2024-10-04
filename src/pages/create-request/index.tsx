import CreditForm from '@/components/frames/forms/credit-form';
import styles from './index.module.scss';

const CreateRequestPage = () => {
  return (
    <div className={styles.page}>
      <CreditForm />
    </div>
  );
};

export default CreateRequestPage;
