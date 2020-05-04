import axios, { AxiosResponse, AxiosPromise } from "axios";
import { UserProps } from "./User";

export interface HasId{
    id?:number;
}

export class APISync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save( data: T): AxiosPromise {
    const { id } = data;
    if (id) {
     return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
     return axios.post(this.rootUrl, data);
    }
  }
}
