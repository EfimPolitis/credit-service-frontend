import cn from 'clsx';
import { IRequest } from '@/types/request.types';
import { Check, Clock, X } from 'lucide-react';
import styles from './index.module.scss';

interface IRequestCard {
  count: number;
  request: IRequest;
}

const statusConvert = {
  PENDING: (
    <p className={cn(styles.status, styles.pending)}>
      В ожидании <Clock size={20} strokeWidth={3} />
    </p>
  ),
  APPROVED: (
    <p className={cn(styles.status, styles.approved)}>
      Принята <Check size={20} strokeWidth={3} />
    </p>
  ),
  REJECTED: (
    <p className={cn(styles.status, styles.rejected)}>
      Отклоненна <X size={20} strokeWidth={3} />
    </p>
  ),
};

const RequestCard = ({ count, request }: IRequestCard) => {
  const { amount, status, createdAt } = request;
  const date = new Date(createdAt);
  return (
    <ul className={styles.credit_card}>
      <li>{count}</li>
      <li>{parseInt(amount).toLocaleString()} руб.</li>
      <li>
        {
          //@ts-ignore
          statusConvert[`${status}`]
        }
      </li>
      <li className={styles.date}>
        <span>{date.toLocaleTimeString().slice(0, 5)}</span>
        <span>
          {date.getDay() > 10 ? date.getDay() : '0' + date.getDay()}-
          {date.getMonth() > 10 ? date.getMonth() : '0' + date.getMonth()}-
          {date.getFullYear()}
        </span>
      </li>
    </ul>
  );
};

export default RequestCard;
