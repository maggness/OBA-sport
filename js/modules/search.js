import { getAndRenderData } from './getAndRenderData.js'

export const search = () => {
    const searchBar = document.querySelector("#searchBar")
    let searchTerm = searchBar.value ? searchBar.value : "sport"
    const cors = "https://cors-anywhere.herokuapp.com/"
    const endpoint = "https://zoeken.oba.nl/api/v1/search/?q="
    const key = "8854ebaac6d5b76ab5a25a372d249680"
    const detail = "Default"
    let url = `${cors}${endpoint}${searchTerm}&authorization=${key}&detaillevel=${detail}&output=json`

    console.log(endpoint + searchTerm);
    getAndRenderData(url);
}

searchBar.addEventListener("keyup", function (e) {
    search();
  });