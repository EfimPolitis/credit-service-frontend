import { API_URL } from '@/constants/api_url';
import { IFormData } from '@/types/form.types';
import { IQueryParam } from '@/types/query-param.types';
import { IRequest } from '@/types/request.types';
import axios from 'axios';

export const requestService = {
  async getRequests(query: IQueryParam | null) {
    const url = `?name=${query?.name}&&surname=${query?.surname}&&birthDate=${query?.birthDate}`;
    return axios.get<IRequest[]>(`${API_URL}/request${url}`);
  },

  async createRequest(data: IFormData) {
    return axios.post<IRequest>(`${API_URL}/request`, data);
  },
};
