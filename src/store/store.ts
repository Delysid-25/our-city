import { makeAutoObservable } from "mobx";

class Store {
  showState = "flat";
  theme = "light";
  constructor() {
    makeAutoObservable(this);
  }

  changeShowState = (v:string) => {
    this.showState = v;
  };
  changeThemeState = (v:string) => {
    this.theme = v;
  };
}

export const store = new Store();