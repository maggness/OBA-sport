import { randomizeBalls } from "./randomizeBalls.js"

export function renderData(data) {
    const ballsContainer = document.querySelector("#ballsContainer")

    ballsContainer.innerHTML = ""
    const results = data.results
    results.forEach((item) => {
        console.log(item.titles);
      const html = `
                <li class="swag">
                  <img src="${item.coverimages[1]}"></img>
                </li>
              `
        ballsContainer.insertAdjacentHTML("afterbegin", html)
    })
    randomizeBalls()
  }

// <h2>${item.titles}</h2>

  export function renderError(err) {
    const ballsContainer = document.querySelector("#ballsContainer")

      const html = `
                <li>
                  <h2>Hij werkt niet wat een feest</h2>
                </li>
              `
        ballsContainer.insertAdjacentHTML("afterbegin", html)
        randomizeBalls()
  }