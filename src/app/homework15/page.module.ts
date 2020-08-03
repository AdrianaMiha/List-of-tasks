import { IPage } from "./page.interface";

export class Page implements IPage{
  public picture: string;
  public name: string;
  public routerLink: string;
}