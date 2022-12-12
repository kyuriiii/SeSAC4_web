import { makeAutoObservable, toJS } from "mobx";
import axios from "axios";

class Count {
  number = 0;
  arr = [
    { name: "sion", age: 25, gender: "man" },
    { name: "yujin", age: 25, gender: "woman" }
  ];
  user = [];

  constructor() {
    makeAutoObservable(this);
  }

  increase = () => {
    this.number++;
  };
  decrease = () => {
    this.number--;
  };
  setUser = newUser => {
    this.user = newUser;
  };

  getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        return res.data;
      })
      .then(data => {
        this.user = data;
        console.log(toJS(this.user));
      });
    // .then(json => console.log(json));
  };
}

const countStore = new Count();
export default countStore;
