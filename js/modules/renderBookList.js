import { list } from "./moveItems.js";

const bookList = document.querySelector("#bookList");
const yourList = document.querySelector("#yourList");

const generateBookList = () => {
  const geenLijstTekst =
    "<li>Je lijst is nog leeg! Sleep boeken naar de boekenkast om je lijstje te vullen!</li>";
  bookList.innerHTML = "";

  if (list.length === 0) {
    bookList.insertAdjacentHTML("afterbegin", geenLijstTekst);
  }
  list.forEach((item) => {
    const listData = `
                <li>
                  <p>${item}</p>
                </li>
              `;
    bookList.insertAdjacentHTML("afterbegin", listData);
  });
  bookList.classList.toggle("listOpen");
  bookList.classList.add("closeSmooth");
};

yourList.addEventListener("click", generateBookList);
