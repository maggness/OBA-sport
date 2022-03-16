import { randomizeBalls } from "./randomizeBalls.js";
import { clearData } from "./clearData.js";
import "./search.js";

const ballsContainer = document.querySelector("#MainContainerId");
const body = document.body

export const renderData = (data, id, year) => {
  if (!id && !year) {
    body.classList.remove("renderItemDetails");
    renderDatanoId(data);
  }
  // else if (year) {
  //   renderDataWithYear(data), year;
  //   console.log('year');
  // }
  else {
    body.classList.add("renderItemDetails");
    renderDataWithId(data, id);
  }
};

const renderDatanoId = (data) => {
  clearData();
  const results = data.results;
  results.forEach((item) => {
    console.log(item.id);
    if (item.coverimages[1] === undefined) {
      console.log("kut ding");
      item.coverimages[1] = "./images/noimage.png";
    }
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
};

// Render with ID
const renderDataWithId = (data, id) => {
  clearData();
  const filter = data.results.filter((item) => item.id === id);
  const image = filter.map((item) => item.coverimages[1]);
  const title = filter.map((item) => item.titles[1]);

  ballsContainer.insertAdjacentHTML(
    "afterbegin",
    `<li class="itemDetails">
      <h1>${title}</h1>
      <img src="${image}"></img>
    </li>`
  );
};

// Render with year
// const renderDataWithYear = (data, year) => {
//   clearData()
//   const filter = data.results.filter((item) => item.year === year);
//   const image = filter.map((item) => item.coverimages[1]);
//   const title = filter.map((item) => item.titles[1]);

//   ballsContainer.insertAdjacentHTML(
//     "afterbegin",
//     `<h1>${title}</h1>
//     <img src="${image}"></img>
//     `
//   );
// }

export function renderError(err) {
  const html = `
                <li>
                  <h2>Hij werkt niet wat een feest</h2>
                </li>
              `;
  randomizeBalls();
  ballsContainer.insertAdjacentHTML("afterbegin", html);
}
