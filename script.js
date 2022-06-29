// get the required elements from the DOM
const containerElement = document.querySelector('body');
const elementToAnimate = document.querySelector('.box');

const animateBox = {
  getElementHeight: function (element) {
    return element.offsetHeight;
  },
  getElementWidth: function (element) {
    return element.offsetWidth;
  },

  updatePosition: function (elementToAnimate) {
    // update top and left position of the box
    elementToAnimate.style.left = this.xPosition + 'px';
    elementToAnimate.style.top = this.yPosition + 'px';
  },

  init: function (options) {
    // destructure the properties from the options object
    const { intervalTime, xMoveBox, yMoveBox, xPosition, yPosition } = options || {};

    // set the initial values as per the options object
    this.intervalTime = intervalTime || 1000;
    this.xMoveBox = xMoveBox || 10;
    this.yMoveBox = yMoveBox || 10;
    this.xPosition = xPosition || 0;
    this.yPosition = yPosition || 50;

    // set initial values for the animation
    this.xPosition = this.xPosition + this.xMoveBox;
    this.yPosition = this.yPosition + this.yMoveBox;
  },

  start: function (containerElement, elementToAnimate) {
    // get required values for the animation (height, width of the container and box)
    const containerHeight = this.getElementHeight(containerElement);
    const containerWidth = this.getElementWidth(containerElement);
    const boxHeight = this.getElementHeight(elementToAnimate);
    const boxWidth = this.getElementWidth(elementToAnimate);

    // create a loop with setInterval for the animation
    setInterval(() => {
      this.updatePosition(elementToAnimate);

      // change the direction of the box when it reaches the edge (left or right)
      if (this.xPosition + boxWidth >= containerWidth || this.xPosition <= 0) {
        this.xMoveBox = -this.xMoveBox;
      }

      // change the direction of the box when it reaches the edge (top or bottom)
      if (this.yPosition + boxHeight >= containerHeight || this.yPosition <= 0) {
        this.yMoveBox = -this.yMoveBox;
      }

      // update values for the next iteration
      this.xPosition = this.xPosition + this.xMoveBox;
      this.yPosition = this.yPosition + this.yMoveBox;
    }, this.intervalTime);
  }
};

// call the init function to initialize the animation with required values
animateBox.init({
  intervalTime: 1000,
  xMoveBox: 10,
  yMoveBox: 10,
  xPosition: 0,
  yPosition: 50
});

// call the start function to start the animation
animateBox.start(containerElement, elementToAnimate);
