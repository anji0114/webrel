export type TApiResponse<T> = {
  data: T;
  message: string;
};

export type TContext = {
  params: { id: string };
};

export { AxiosError as ApiError } from 'axios';
