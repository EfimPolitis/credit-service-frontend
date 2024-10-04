import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CalendarDays, User } from 'lucide-react';
import { IFormData } from '@/types/form.types';
import { Button, Field, Loader } from '@/components/ui';
import styles from './index.module.scss';
import toast, { Toaster } from 'react-hot-toast';
import { useGetRequests } from '@/hooks/useGetRequests';
import { IQueryParam } from '@/types/query-param.types';
import RequestCard from '../../request-card';

const SearchForm = () => {
  const [query, setQuery] = useState<IQueryParam | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const onSubmit: SubmitHandler<IFormData> = data => setQuery(data);

  const { data, isFetching, refetch, error } = useGetRequests(query);

  if (error) toast(error.message);

  const requests = data?.data;

  useEffect(() => {
    refetch();
  }, [query]);

  if (!!Object.keys(errors).length) {
    const errorsKeys = Object.keys(errors);
    errorsKeys.forEach(error => {
      //@ts-ignore
      toast.error(errors[error].message);
    });
  }

  return (
    <React.Fragment>
      <h1>{requests?.length ? 'Ваши заявки' : 'Найти заявки'}</h1>
      {requests?.length ? (
        <>
          <ul className={styles.head}>
            <li></li>
            <li>Размер кредита</li>
            <li>Статус</li>
            <li>Дата создания</li>
          </ul>
          <div className={styles.request_list}>
            {requests?.map((request, i) => (
              <RequestCard
                count={i + 1}
                request={request}
                key={request.requestId}
              />
            ))}
          </div>
        </>
      ) : isFetching ? (
        <Loader size={40} />
      ) : (
        <form className={styles.search_form} onSubmit={handleSubmit(onSubmit)}>
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
              required: {
                message: '"Фамилия" - обязательно поле',
                value: true,
              },
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
          <Button text='Поиск' type='submit' isLoading={isFetching} />
        </form>
      )}
      <Toaster />
    </React.Fragment>
  );
};

export default SearchForm;
