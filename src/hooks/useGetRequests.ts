import { requestService } from '@/services/request.service';
import { IQueryParam } from '@/types/query-param.types';
import { useQuery } from '@tanstack/react-query';

export const useGetRequests = (query: IQueryParam | null) => {
  const { data, isFetching, refetch, error } = useQuery({
    queryKey: ['getRequests'],
    queryFn: () => requestService.getRequests(query),
  });

  return { data, isFetching, refetch, error };
};
