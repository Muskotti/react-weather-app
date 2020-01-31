import text from "./AppId.js";

export default class fetchData {

  getWeatherFrom(id) {
    try {
      return fetch('https://api.openweathermap.org/data/2.5/weather?id='+ id +'&units=metric&APPID='+ text)
        .then((responce) => responce.json())
        .then((data) => {
          console.log(data)
        });
    } catch (error) {
      console.error(error);
    }
  }
}