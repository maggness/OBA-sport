import { getData } from "./modules/getData.js";
import { randomizeBalls } from "./modules/randomizeBalls.js";
import "./modules/moveItems.js";
import "./routes/routie.js";

routie({
  "": () => {
    console.log("https://cors-anywhere.herokuapp.com/");
    randomizeBalls()
    getData();
  },
  "item/:id": (id) => {
    getData(id);
  },
  "item/:year": (year) => {
    getData(year);
  },
});
