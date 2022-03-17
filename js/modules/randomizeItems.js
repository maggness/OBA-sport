export const randomizeItems = (min, max) => {
  const ball = document.querySelectorAll(".MainContainer a");
  ball.forEach((element) => {
    getRndInteger(min, max);
    element.style.setProperty("--topBallPos", getRndInteger(0, 50) + "vh");

    getRndInteger(min, max);
    element.style.setProperty("--leftBallPos", getRndInteger(0, 50) + "vw");

    getRndInteger(min, max);
    element.style.setProperty("--ballIndex", getRndInteger(2, ball.length + 1));
  });
};

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
