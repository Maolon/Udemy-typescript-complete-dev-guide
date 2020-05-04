import faker from "faker";
import { Mappable } from "./CustomMap";

export class Company implements Mappable {
  name: string;
  catchPharse: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.company.companyName();
    this.catchPharse = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `
    <div>
    <h3>Company Name ${this.name}</h3>
    <p>${this.catchPharse}</p>
    </div>
    `;
  }
}
