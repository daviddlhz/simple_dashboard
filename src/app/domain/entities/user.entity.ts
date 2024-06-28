import {Address} from "@domain/interfaces/address.interface";
import {Company} from "@domain/interfaces/company.interface";

export interface UserEntity {
  id?: number,
  name: string,
  username: string,
  email: string,
  "address": Address
  "phone": string,
  "website": string,
  "company": Company
}

export type UserData = Pick<UserEntity, "name" | "email" | "address" | "phone">
