import { getData, getData2 } from "./modules/getData.js";
import { randomizeItems } from "./modules/randomizeItems.js";
import "./modules/moveItems.js";
import "./routes/routie.js";
import "./modules/renderBookList.js";

routie({
  "": () => {
    console.log("https://cors-anywhere.herokuapp.com/");
    randomizeItems();
    getData();
    getData2();
  },
  "item/:id": (id) => {
    getData(id);
  },
  // Not used
  "item/:year": (year) => {
    getData(year);
  },
});
