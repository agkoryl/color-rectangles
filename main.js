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
      rectangleElement.setAttribute("data-index", index);

      if (rectangle.size && rectangle.color && rectangle.index) {

        this.container.appendChild(rectangleElement);
//         this.container.insertBefore(
//           rectangleElement,
//           this.container.firstChild
//         );
//         rectangleElement.setAttribute("data-index", "-1");
        
// //         let positionIndex = parseInt(rectangleElement.getAttribute("data-index"));
// //         let newPositionIndex = positionIndex + 1;
       
// // rectangleElement.setAttribute("data-index", newPositionIndex.toString());

//       } else if (
//         rectangle.size &&
//         rectangle.color &&
//         rectangle.position === "bottom"
//       ) {
//         this.container.appendChild(rectangleElement);

//         let newRectangleIndex = parseInt(this.container.container.lastChild.getAttribute("data-index")) +1;
//         rectangleElement.setAttribute("data-index", newRectangleIndex);
      }
    }, this);
  };

  Container.prototype.addRectangle = function(rectangle) {
    this.rectangleSet.push(rectangle);
    this.render();
  };

  return Container;
})();

let container = new Container(document.querySelector("#rectangles-display"));
