export type TApiResponse<T> = {
  data: T;
  message: string;
};

export { AxiosError as ApiError } from 'axios';
