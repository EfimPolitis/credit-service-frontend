import { SubmitHandler, useForm } from 'react-hook-form';
import { CalendarDays, CreditCard, User } from 'lucide-react';
import { IFormData } from '@/types/form.types';
import { Button, Field, TextArea } from '@/components/ui';
import styles from './index.module.scss';
import toast, { Toaster } from 'react-hot-toast';
import { useCreateRequest } from '@/hooks/useCreateRequest';

const CreditForm = () => {
  const { mutate, isPending, isSuccess, error } = useCreateRequest();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const onSubmit: SubmitHandler<IFormData> = data => mutate(data);

  if (error) toast.error(error.message);

  if (!!Object.keys(errors).length) {
    const errorsKeys = Object.keys(errors);
    errorsKeys.forEach(error => {
      //@ts-ignore
      toast.error(errors[error].message);
    });
  }

  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>Заполните форму</h1>
      <form className={styles.credit_form} onSubmit={handleSubmit(onSubmit)}>
        <Field
          placeholder='Имя'
          Icon={User}
          {...register('name', {
            required: { message: '"Имя" - обязательно поле', value: true },
          })}
        />
        <Field
          placeholder='Фамилия'
          Icon={User}
          {...register('surname', {
            required: { message: '"Фамилия" - обязательно поле', value: true },
          })}
        />
        <Field
          placeholder='Дата рождения'
          Icon={CalendarDays}
          type='date'
          title='Дата рождения'
          {...register('birthDate', {
            required: {
              message: '"Дата рождения" - обязательно поле',
              value: true,
            },
            max: {
              value: new Date(
                Date.now() - 18 * 365 * 24 * 60 * 60 * 1000
              ).toISOString(),
              message: 'Вам должно быть больше 18 лет.',
            },
            min: {
              value: new Date(
                Date.now() - 60 * 365 * 24 * 60 * 60 * 1000
              ).toISOString(),
              message: 'Вам должно быть меньше 60 лет.',
            },
          })}
        />
        <Field
          placeholder='Размер кредита'
          Icon={CreditCard}
          type='number'
          {...register('amount', {
            required: {
              message: '"Размер кредита" - обязательно поле',
              value: true,
            },
          })}
        />
        <TextArea
          placeholder='Цель кредита'
          {...register('purpose', {
            required: {
              message: '"Цель кредита" - обязательно поле',
              value: true,
            },
          })}
        />
        <Button
          text='Подать заявку'
          type='submit'
          isPending={isPending}
          isSuccess={isSuccess}
        />
      </form>
      <Toaster />
    </div>
  );
};

export default CreditForm;
