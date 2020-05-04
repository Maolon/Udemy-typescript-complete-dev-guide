import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAttributes<T> {
  set(val: T): void;
  getAll(): T;
  get<K extends keyof T>(key: K): T[K];
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface Events {
  on(evetName: string, callback: () => void):void;
  trigger(eventName: string): void;
}

interface HasID {
  id?: number;
}

export class Model<T extends HasID> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}
  // typescript getter
  // equals get = on(){ this.events.on}
  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: T): void {
    this.attributes.set(update);
    this.events.trigger("change");
  }

  fetch(): void {
    const id = this.attributes.get("id");
    if (typeof id !== "number") {
      throw new Error("Cannot fetch without id");
    }
    this.sync.fetch(id).then((resp: AxiosResponse): void => {
      this.attributes.set(resp.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((resp: AxiosResponse) => {
        this.trigger("save");
      })
      .catch(() => {
        this.trigger("error");
      });
  }
}
