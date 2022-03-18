import { renderData, renderError } from "./renderData.js";

export const getData = (id) => {
  const searchBar = document.querySelector("#searchBar");
  let searchTerm = searchBar.value ? searchBar.value : "sport";
  const apilink = {
    cors: "https://cors-anywhere.herokuapp.com/",
    endpoint: "https://zoeken.oba.nl/api/v1/search/?q=",
    key: "8854ebaac6d5b76ab5a25a372d249680",
    detail: "Default",
  };
  const secret = "4289fec4e962a33118340c888699438d"
  const { cors, endpoint, key, detail } = apilink;
  const url = `${cors}${endpoint}${searchTerm}&authorization=${key}&detaillevel=${detail}&output=json`;

  const config = {
    Authorization: `Bearer ${secret}`,
}

  const getData = fetch(url, config)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderData(data, id);
    })
    .catch((err) => {
      console.log(err);
      renderError(err);
    });
};

// API 2 connection
export const getData2 = () => {
  const searchBar = document.querySelector("#searchBar");
  let searchTerm = searchBar.value ? searchBar.value : "sport";
  const secret = "4289fec4e962a33118340c888699438d"
  const cors = "https://cors-anywhere.herokuapp.com/"
  let url2 = `${cors}http://obaliquid.staging.aquabrowser.nl/onderwijs/api/v1/search/?q=${searchTerm}+lom.lifecycle.contribute.publisher%3Dwikipedia&authorization=a57b7bbd1cde2f6fb7ce5b3f2d1d96e0&output=json`

  const config2 = {
    Authorization: `Bearer ${secret}`,
}

  const getData2 = fetch(url2, config2)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // renderData(data, id);
      console.log('GetData2 works');
    })
    .catch((err) => {
      console.log(err);
      renderError(err);
    });
};
