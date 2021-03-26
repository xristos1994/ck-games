//*
import { AjaxResponse } from "rxjs/ajax";

export enum IRequestTypes {
  post = "POST",
  get = "GET",
  put = "PUT",
}

export interface IGetService {
  (params: { url: string; headers?: object }): {
    method: IRequestTypes;
    url: string;
    headers: object;
  };
}

export interface IPostService {
  (params: { url: string; headers?: object; body?: object }): {
    method: IRequestTypes;
    url: string;
    headers: object;
    body: object;
  };
}

export interface IPutService {
  (params: { url: string; headers?: object; body?: object }): {
    method: IRequestTypes;
    url: string;
    headers: object;
    body: object;
  };
}

export interface IService {
  (payload: AjaxResponse): {
    method: IRequestTypes;
    url: string;
    headers: object;
    body?: object;
  };
}
