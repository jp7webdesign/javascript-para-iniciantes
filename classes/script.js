// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function () {
//   const buttonElement = document.createElement("button");
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// };

// const blueButton = new Button("Comprar", "blue");

// console.log(blueButton.element());

// const button = document.createElement("button");
// button.innerHTML = "Comprar";

// const divButton = document.querySelector(".button");
// divButton.appendChild(button);

// button.addEventListener("click", function () {
//   alert("Comprei.");
// });

// class Button {
//   constructor(text, background, color) {
//     this.text = text;
//     this.background = background;
//     this.color = color;
//   }
//   element() {
//     const buttonElement = document.createElement("button");
//     buttonElement.innerText = this.text;
//     buttonElement.style.background = this.background;
//     buttonElement.style.color = this.color;
//     return buttonElement;
//   }
//   appendTo(target) {
//     const targetElement = document.querySelector(target);
//     targetElement.appendChild(this.element());
//     return targetElement;
//   }
// }

// const blueButton = new Button("Comprar", "blue", "white");
// const divButton = document.querySelector(".button");
// divButton.appendChild(blueButton.element());

// console.log(blueButton.appendTo("body"));

// class Button {
//   constructor(options) {
//     this.options = options;
//   }
// }

// const blueButton = new Button({
//   backgroundColor: "blue",
//   text: "Cromprar",
//   color: "white",
// });

class Button {
  constructor(text) {
    this.text = text;
  }
  static create(background) {
    const elementButton = document.createElement("button");
    elementButton.style.background = background;
    elementButton.innerText = "Clique";
    return elementButton;
  }
}

const blueButton = Button.create("blue");
console.log(blueButton);
