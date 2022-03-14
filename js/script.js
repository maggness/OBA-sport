const endpoint = 'https://zoeken.oba.nl/api/v1/search/?q=';
const query = 'tolkien';
const key = '1e19898c87464e239192c8bfe422f280';
const secret = '4289fec4e962a33118340c888699438d';
const detail = 'Default';
const url = `${endpoint}${query}&authorization=${key}&detaillevel=${detail}&output=json`;

const config = {
  Authorization: `Bearer ${secret}`
};

fetch(url, config)
  .then(response => {
    return response.json();
  })
  .then(data => {
    render(data);
  })
  .catch(err => {
    console.log(err);
  });