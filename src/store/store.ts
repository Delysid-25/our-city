import { makeAutoObservable } from "mobx";

class Store {
  showState = "flat";

  constructor() {
    makeAutoObservable(this);
  }

  changeShowState = (v:string) => {
    this.showState = v;
  };
}

export const store = new Store();