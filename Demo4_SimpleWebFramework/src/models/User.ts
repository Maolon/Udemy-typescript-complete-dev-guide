import { Events } from "./Events";
import { APISync } from "./APISync";
import { Attribute } from "./Attributes";
import { AxiosResponse } from "axios";
import { Model } from "./Model";
import { Collection } from "./Collections";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static build(attrs: UserProps): User {
    console.log(attrs);
    return new User(
      new Attribute<UserProps>(attrs),
      new Events(),
      new APISync<UserProps>(rootUrl)
    );
  }

  static buildUserCollection(): Collection<User, UserProps> {
    return new Collection<User, UserProps>(rootUrl, (json: UserProps) =>
      User.build(json)
    );
  }

  setRandomnAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
