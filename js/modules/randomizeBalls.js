export const randomizeBalls = (min, max) => {
    let ball = document.querySelectorAll('.ballsack li');
    console.log(ball);

    ball.forEach(element =>  {
        getRndInteger(min, max)
        element.style.setProperty('--topBallPos', getRndInteger(0,50) + "vh");

        getRndInteger(min, max)
        element.style.setProperty('--leftBallPos', getRndInteger(0,50) + "vw");

        getRndInteger(min, max)
        element.style.setProperty('--leftBallShadow', getRndInteger(-5, 5) + "px");

        getRndInteger(min, max)
        element.style.setProperty('--topBallShadow', getRndInteger(-5, 5) + "px");

        getRndInteger(min, max)
        element.style.setProperty('--ballIndex', getRndInteger(1, ball.length + 1));

        getRndInteger(min, max)
        element.style.setProperty('--ballWidth', getRndInteger(20, 40) + "vw");
    });
};

const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) ) + min;
  }