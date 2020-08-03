import { IUser } from "./user.interface";

export class User implements IUser{
  constructor(
  public firstName: string,
  public lastName: string,
    public number: string,
  ){}
}