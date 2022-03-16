import { getAndRenderData } from "./modules/getAndRenderData.js";
import { randomizeBalls } from "./modules/randomizeBalls.js";
import "./modules/moveItems.js";
import "./routes/routie.js";

routie({
  "": () => {
    randomizeBalls()
    getAndRenderData();
  },
  "item/:id": (id) => {
    getAndRenderData(id);
  },
});
