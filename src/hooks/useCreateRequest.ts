import { requestService } from '@/services/request.service';
import { IFormData } from '@/types/form.types';
import { useMutation } from '@tanstack/react-query';

export const useCreateRequest = () => {
  const { mutate, isPending, isSuccess, error } = useMutation({
    mutationKey: ['createRequest'],
    mutationFn: (requestData: IFormData) =>
      requestService.createRequest(requestData),
  });

  return { mutate, isPending, isSuccess, error };
};
