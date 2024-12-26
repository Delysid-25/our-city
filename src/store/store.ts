import { makeAutoObservable } from "mobx";

class Store {
  showState = "flat";
  nextUiTheme = "light";
  constructor() {
    makeAutoObservable(this);
  }

  changeThemeState = (v: string) => {
    this.nextUiTheme = v;
  };
  changeShowState = (v: string) => {
    this.showState = v;
  };
}

export const store = new Store();
