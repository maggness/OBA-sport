import { getData } from "./modules/getData.js";
import { randomizeItems } from "./modules/randomizeItems.js";
import "./modules/moveItems.js";
import "./routes/routie.js";

routie({
  "": () => {
    console.log("https://cors-anywhere.herokuapp.com/");
    randomizeItems()
    getData();
  },
  "item/:id": (id) => {
    getData(id);
  },
  "item/:year": (year) => {
    getData(year);
  },
});
