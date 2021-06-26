//*
import { AjaxResponse } from 'rxjs/ajax';

export enum IRequestTypes {
  post = 'POST',
  get = 'GET',
  put = 'PUT'
}

export interface IGetService {
  (params: { url: string; headers?: Record<string, string | number> }): {
    method: IRequestTypes;
    url: string;
    headers?: Record<string, string | number>;
  };
}

export interface IPostService {
  (params: { url: string; headers?: Record<string, string | number>; body?: Record<string, unknown> }): {
    method: IRequestTypes;
    url: string;
    headers?: Record<string, string | number>;
    body?: Record<string, unknown>;
  };
}

export interface IPutService {
  (params: { url: string; headers?: Record<string, string | number>; body?: Record<string, unknown> }): {
    method: IRequestTypes;
    url: string;
    headers?: Record<string, string | number>;
    body?: Record<string, unknown>;
  };
}

export interface IService {
  (payload: AjaxResponse): {
    method: IRequestTypes;
    url: string;
    headers: Record<string, string | number>;
    body?: Record<string, unknown>;
  };
}
