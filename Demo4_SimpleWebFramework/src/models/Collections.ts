import { User, UserProps } from "./User";
import { Events } from "./Events";
import Axios, { AxiosResponse } from "axios";

export class Collection<T, K> {
  models: T[] = [];
  events: Events = new Events();
  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    Axios.get(this.rootUrl).then((resp: AxiosResponse) => {
      resp.data.forEach((val: K) => {
        this.models.push(this.deserialize(val));
      });
    });
    this.trigger("change");
  }
}
