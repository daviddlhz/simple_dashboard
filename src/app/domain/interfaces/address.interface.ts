import {Coordinates} from "@domain/interfaces/coordinates.interface";

export interface Address {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Coordinates
}
