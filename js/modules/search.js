import { getData } from "./getData.js";

export const search = () => {
  const searchBar = document.querySelector("#searchBar");
  let searchTerm = searchBar.value ? searchBar.value : "sport";
};

searchBar.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    search();
    getData();
  }
});
