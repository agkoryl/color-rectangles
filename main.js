var openModal = function openModal() {
  document.querySelector("#background").style.visibility = "visible";
  document.querySelector("#modal-container").style.visibility = "visible";
  clearCheckedElementsInModal();
};

var closeModal = function closeModal() {
  document.querySelector("#background").style.visibility = "hidden";
  document.querySelector("#modal-container").style.visibility = "hidden";
};

var clearCheckedElementsInModal = function clearCheckedElementsInModal() {
  var modal = document.querySelector('#modal-body');
  var icons = modal.querySelectorAll("i");

  icons.forEach(function(icon) {
    icon.remove();
  })
};

document.querySelector("#add-button").addEventListener("click", openModal);
document.querySelector("#close").addEventListener("click", closeModal);

var Container = (function() {
  function Container(container) {
    this.container = container;
    this.rectangleSet = [];
  }

  Container.prototype.render = function() {
    this.container.innerHTML = "";

    this.rectangleSet.forEach(function(rectangle) {
      var rectangleElement = document.createElement("div");
      rectangleElement.classList.add("square");
      rectangleElement.classList.add(rectangle.size);
      rectangleElement.classList.add(rectangle.color);
      rectangleElement.classList.add(rectangle.position);

      if (rectangle.size && rectangle.color && rectangle.position === "top") {
        this.container.insertBefore(
          rectangleElement,
          this.container.firstChild
        );
      } else if (
        rectangle.size &&
        rectangle.color &&
        rectangle.position === "bottom"
      ) {
        this.container.appendChild(rectangleElement);
      }
    }, this);
  };

  Container.prototype.addRectangle = function(rectangle) {
    this.rectangleSet.push(rectangle);
    this.render();
  };

  return Container;
})();

var Rectangle = (function() {
  function Rectangle(size, color, position) {
    this.size = size;
    this.color = color;
    this.position = position;
  }

  return Rectangle;
})();

let size = "";

document
  .querySelector("#size-options-container")
  .addEventListener("click", function(button) {
    if (button.target && button.target.nodeName == "BUTTON") {

      let buttons = document.querySelectorAll("#size-options-container button");

      buttons.forEach(function(sizeButton) {
        if (sizeButton.firstChild.nodeName == "I") {
          sizeButton.removeChild(sizeButton.firstChild);
        }
      });

      size = button.target.dataset.size;

      let icon = document.createElement("i");
      icon.classList.add("fas", "fa-check", "check-icon");
      button.target.prepend(icon);
    }
  });

let color = "";

document
  .querySelector("#colors-container")
  .addEventListener("click", function(button) {
    if (button.target && button.target.nodeName == "BUTTON") {

      let buttons = document.querySelectorAll("#colors-container button");

      buttons.forEach(function(colorButton) {

        if (colorButton.firstChild && colorButton.firstChild.nodeName == "I") {
          colorButton.removeChild(colorButton.firstChild);
        }
      });
      color = button.target.dataset.color;

      let icon = document.createElement("i");
      icon.classList.add("fas", "fa-check", "color-check-icon");
      button.target.appendChild(icon);
    }
  });

let position = "";

document
  .querySelector("#position-row")
  .addEventListener("click", function(button) {
    if (button.target && button.target.nodeName == "BUTTON") {
      let buttons = document.querySelectorAll("#position-row button");

      buttons.forEach(function(positionButton) {
        if (positionButton.firstChild.nodeName == "I") {
          positionButton.removeChild(positionButton.firstChild);
        }
      });

      position = button.target.dataset.position;
      let icon = document.createElement("i");
      icon.classList.add("fas", "fa-check", "check-icon");
      button.target.prepend(icon);
    }
  });

let container = new Container(document.querySelector("#rectangles-display"));

document
  .querySelector("#create-rectangle-button")
  .addEventListener("click", function() {
    container.addRectangle(new Rectangle(size, color, position));
    closeModal();
  });
