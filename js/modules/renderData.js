import { randomizeBalls } from "./randomizeBalls.js";
import './search.js'

const ballsContainer = document.querySelector("#MainContainerId");

export const renderData = (data, id) => {
  if (!id) {
    renderDatanoId(data);
  } else {
    renderDataWithId(data, id);
  }
};

const renderDatanoId = (data) => {
  ballsContainer.innerHTML = "";
  const results = data.results;
  results.forEach((item) => {
    console.log(item.id);
    const html = `
                <li>
                  <a href="#item/${item.id}">
                  <img src="${item.coverimages[1]}"></img>
                  </a>
                </li>
              `;
    // <h2>${item.titles[0]}</h2>
    ballsContainer.insertAdjacentHTML("afterbegin", html);
  });
  randomizeBalls();
}

// Render with ID
const renderDataWithId = (data, id) => {
  ballsContainer.innerHTML = "";
  const filter = data.results.filter((item) => item.id === id);
  const image = filter.map((item) => item.coverimages[1]);
  // const maker = filter.map((item) => item.principalOrFirstMaker);
  // const image = filter.map((item) => item.webImage.url);

  ballsContainer.insertAdjacentHTML(
    "afterbegin",
    `<h1>swag lmao</h1>
    <img src="${image}"></img>
    `
  );
}

export function renderError(err) {
  const html = `
                <li>
                  <h2>Hij werkt niet wat een feest</h2>
                </li>
              `;
  ballsContainer.insertAdjacentHTML("afterbegin", html);
}