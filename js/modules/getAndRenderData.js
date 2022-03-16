import { renderData, renderError } from './renderData.js'

export const getAndRenderData = (url) => {

fetch(url)
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data);
    renderData(data)
  })
  .catch((err) => {
    console.log(err)
    // renderError(err)
  })
}