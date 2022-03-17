// source: https://www.kirupa.com/html5/drag.htm

const container = document.querySelector("#MainContainerId");
let activeItem = null;
let active = false;

const dragStart = (e) => {
  if (e.target !== e.currentTarget) {
    active = true;

    // this is the item we are interacting with
    activeItem = e.target;

    if (activeItem !== null) {
      if (!activeItem.xOffset) {
        activeItem.xOffset = 0;
      }

      if (!activeItem.yOffset) {
        activeItem.yOffset = 0;
      }

      if (e.type === "touchstart") {
        activeItem.initialX = e.touches[0].clientX - activeItem.xOffset;
        activeItem.initialY = e.touches[0].clientY - activeItem.yOffset;
      } else {
        console.log("doing something!");
        activeItem.initialX = e.clientX - activeItem.xOffset;
        activeItem.initialY = e.clientY - activeItem.yOffset;
      }
    }
  }
};

const dragEnd = (e) => {
  if (activeItem !== null) {
    activeItem.initialX = activeItem.currentX;
    activeItem.initialY = activeItem.currentY;
  }

  active = false;
  activeItem = null;
};

const drag = (e) => {
  if (active) {
    if (e.type === "touchmove") {
      const rectItem = activeItem.getBoundingClientRect()
      console.log(rectItem.top);

      if (rectItem.left < -175) {
        console.log('uit scherm links');
        container.classList.add('fireBorderLeft')

        container.onanimationend = () => {
          container.classList.remove('fireBorderLeft')
        };
      }
      if (rectItem.left > 350) {
        console.log('uit scherm rechts');
        container.classList.add('fireBorderRight')

        container.onanimationend = () => {
          container.classList.remove('fireBorderRight')
        };
      }
      if (rectItem.top < -145) {
        console.log('uit scherm top');
        container.classList.add('fireBorderTop')

        container.onanimationend = () => {
          container.classList.remove('fireBorderTop')
        };
      }
      if (rectItem.top > 750) {
        console.log('uit scherm bottom');
        container.classList.add('fireBorderBottom')

        container.onanimationend = () => {
          container.classList.remove('fireBorderBottom')
        };
      }

      e.preventDefault();

      activeItem.currentX = e.touches[0].clientX - activeItem.initialX;
      activeItem.currentY = e.touches[0].clientY - activeItem.initialY;
    } else {
      activeItem.currentX = e.clientX - activeItem.initialX;
      activeItem.currentY = e.clientY - activeItem.initialY;
    }

    activeItem.xOffset = activeItem.currentX;
    activeItem.yOffset = activeItem.currentY;

    setTranslate(activeItem.currentX, activeItem.currentY, activeItem);
  }
};

const setTranslate = (xPos, yPos, el) => {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
};

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);
