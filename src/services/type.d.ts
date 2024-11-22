export type BaseResponse<T = object> = {
  code: number;
  message: string;
  data: T;
};
