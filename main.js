var openModal = function openModal() {
  document.querySelector("#background").style.visibility = "visible";
  document.querySelector("#modal-container").style.visibility = "visible";
};

var closeModal = function closeModal() {
  document.querySelector("#background").style.visibility = "hidden";
  document.querySelector("#modal-container").style.visibility = "hidden";
};

document.querySelector("#add-button").addEventListener("click", openModal);
document.querySelector("#close").addEventListener("click", closeModal);



var Container = (function() {
  function Container(container) {
    this.container = container;
    this.rectangleSet = [];
  }

  Container.prototype.render = function() {
   this.container.innerHTML = '';

    this.rectangleSet.forEach(function(rectangle) {

        var rectangleElement = document.createElement('div');
        rectangleElement.classList.add('square');
        rectangleElement.classList.add(rectangle.size);
        rectangleElement.classList.add(rectangle.color);
        rectangleElement.classList.add(rectangle.position);

    if (rectangle.size && rectangle.color && rectangle.position === "top") {
        this.container.insertBefore(rectangleElement, this.container.firstChild);
        
    } else if (rectangle.size && rectangle.color && rectangle.position === "bottom")  {
        this.container.appendChild(rectangleElement);
    }

    }, this)

  }

  Container.prototype.addRectangle = function(rectangle) {

    this.rectangleSet.push(rectangle);
    this.render();
 }


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

// Wez info z modala jaki przycisk zostal klikniety

let size = "";

    document.querySelector("#size-options-container").addEventListener("click", function(button) {

        if(button.target && button.target.nodeName == "BUTTON") {
            
            size = button.target.dataset.size;
        }
    });

    let color = "";

    document.querySelector("#colors-container").addEventListener("click", function(button) {

        if(button.target && button.target.nodeName == "BUTTON") {
            
            color = button.target.dataset.color;
        }
    });

    let position = "";

    document.querySelector("#position-row").addEventListener("click", function(button) {

        if(button.target && button.target.nodeName == "BUTTON") {
            
            position = button.target.dataset.position;
        }
    });


let container = new Container(document.querySelector('#rectangles-display'));

document.querySelector("#create-rectangle-button").addEventListener("click", function() {
    container.addRectangle(new Rectangle(size, color, position));
    closeModal();
})








