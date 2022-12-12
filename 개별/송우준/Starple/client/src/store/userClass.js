import { observable, action, computed, configure, makeObservable } from "mobx";

import axios from "axios";

configure({ enforceActions: true });
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

class User {
  userInfo = [];

  constructor() {
    makeObservable(this, {
      userInfo: observable,
      setUserInfo: action,
      userLogin: action,
    });
  }

  setUserInfo = (JsonString) => {
    // arr
    let userInfo = JSON.parse(JsonString);
    console.log(userInfo);
    // this.userInfo = [...userInfo];
  };

  userLogin = async (user) => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_URL}/api/planet/workspace/${user}`,
      header: {
        withCredentials: true,
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => {
        console.log(res.data);
        this.setPlanet(res.data.planets);
      })
      .catch((err) => console.log(err.response.data));
  };
}

const userStore = new User();
export default userStore;
