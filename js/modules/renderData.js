import { randomizeItems } from "./randomizeItems.js";
import { clearData } from "./clearData.js";
import "./search.js";

const mainContainer = document.querySelector("#MainContainerId");
const body = document.body;

export const renderData = (data, id) => {
  if (!id) {
    body.classList.remove("renderItemDetails");
    renderDatanoId(data);
  } else {
    body.classList.add("renderItemDetails");
    renderDataWithId(data, id);
  }
};

// Render data when there is no id
const renderDatanoId = (data) => {
  clearData();
  const results = data.results;
  results.forEach((item) => {
    if (item.coverimages[1] === undefined) {
      item.coverimages[1] = "./images/noimage.png";
    }
    const html = `
                <li>
                  <a href="#item/${item.id}" id="${item.titles[0]}">
                  <img src="${item.coverimages[1]}"></img>
                  </a>
                </li>
              `;
    mainContainer.insertAdjacentHTML("afterbegin", html);
  });
  randomizeItems();
};

// Render with ID
const renderDataWithId = (data, id) => {
  clearData();
  const filter = data.results.filter((item) => item.id === id);
  const image = filter.map((item) => item.coverimages[1]);
  const title = filter.map((item) => item.titles[1]);

  mainContainer.insertAdjacentHTML(
    "afterbegin",
    `<li class="itemDetails">
      <h1>${title}</h1>
      <img src="${image}"></img>
    </li>`
  );
};

// Render if err
export function renderError(err) {
  const html = `
                <li>
                  <h2>Error, try to turn on CORS: <a href="https://cors-anywhere.herokuapp.com/">https://cors-anywhere.herokuapp.com/</a></h2>
                </li>
              `;
  randomizeItems();
  mainContainer.insertAdjacentHTML("afterbegin", html);
}
