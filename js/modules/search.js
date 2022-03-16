import { getData } from "./getData.js";

export const search = () => {
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

};

searchBar.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    search();
    getData();
  }
});
