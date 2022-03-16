import { randomizeBalls } from "./randomizeBalls.js"

export function renderData(data) {
    const ballsContainer = document.querySelector("#MainContainerId")

    ballsContainer.innerHTML = ""
    const results = data.results
    results.forEach((item) => {
        console.log(item.id);
      const html = `
                <li>
                  <a href="#${item.id}">
                  <img src="${item.coverimages[1]}"></img>
                  </a>
                </li>
              `
              // <h2>${item.titles[0]}</h2>
        ballsContainer.insertAdjacentHTML("afterbegin", html)
    })
    randomizeBalls()
  }

  export function renderError(err) {
    const ballsContainer = document.querySelector("#MainContainerId")

      const html = `
                <li>
                  <h2>Hij werkt niet wat een feest</h2>
                </li>
              `
        ballsContainer.insertAdjacentHTML("afterbegin", html)
        randomizeBalls()
  }