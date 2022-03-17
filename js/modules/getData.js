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
  const { cors, endpoint, key, detail } = apilink;
  const url = `${cors}${endpoint}${searchTerm}&authorization=${key}&detaillevel=${detail}&output=json`;
  
  const getData = 
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      renderData(data, id);
    })
    .catch((err) => {
      console.log(err);
      renderError(err)
    });
};
