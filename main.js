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
      rectangleElement.setAttribute("data-index", rectangle.index);

      if (rectangle.size && rectangle.color) {
        this.container.appendChild(rectangleElement);
      }
    }, this);
  };

  Container.prototype.addRectangle = function(rectangle) {
    if (rectangle.index == -1) {
      this.rectangleSet.forEach(function(rec) {
        rec.index += 1;
      });
      rectangle.index = 0;
    } else if (rectangle.index < this.rectangleSet.length) {
      for (let i = rectangle.index; i < this.rectangleSet.length; i++) {
        this.rectangleSet[i].index += 1;
      }
    }

    this.rectangleSet.push(rectangle);

    this.rectangleSet.sort(function(rectangleOne, rectangleTwo) {
      return rectangleOne.index - rectangleTwo.index;
    });

    this.render();
  };

  Container.prototype.removeRectangle = function(rectangleIndex) {
    this.rectangleSet.splice(rectangleIndex, 1);

    for (let i = rectangleIndex; i < this.rectangleSet.length; i++) {
      this.rectangleSet[i].index -= 1;
    }

    this.rectangleSet.sort(function(rectangleOne, rectangleTwo) {
      return rectangleOne.index - rectangleTwo.index;
    });

    this.render();
  };

  return Container;
})();

let container = new Container(document.querySelector("#rectangles-display"));
