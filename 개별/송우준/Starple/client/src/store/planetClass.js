import { observable, action, computed, configure, makeObservable } from "mobx";

import axios from "axios";

configure({ enforceActions: true });
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");

class Planet {
  planets = [];
  diaryCategory = [];
  albumCategory = [];

  constructor() {
    makeObservable(this, {
      planets: observable,
      diaryCategory: observable,
      albumCategory: observable,
      setPlanet: action,
      getPlanet: action,
    });
  }

  setPlanet = (planets) => {
    this.planets = [...planets];
  };
  setDiaryCategory = (diaryCategory) => {
    this.diaryCategory = [...diaryCategory];
  };
  setAlbumCategory = (albumCategory) => {
    this.albumCategory = [...albumCategory];
  };

  getPlanets = async (user) => {
    // await axios.get(`/planet/workspace/${user}`).then((res) => {
    //   console.log(res.data);
    // });

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

  getPlanet = (user, planet) => {
    axios.get(`/planet/${user}/${planet}`).then((res) => {
      this.setPlanet(res.data.planet);
      this.setDiaryCategory(res.data.diary);
      this.setAlbumCategory(res.data.album);
    });
  };

  getPlanetData = () => {
    return this.planet;
  };
}

const planetStore = new Planet();
export default planetStore;
