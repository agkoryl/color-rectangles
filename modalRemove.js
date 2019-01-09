var closeModalRemove = function closeModalRemove() {
    document.querySelector("#background-remove").style.visibility = "hidden";
    document.querySelector("#modal-container-remove").style.visibility = "hidden";
  };
  
  var openModalRemove = function openModalRemove() {
    populateExistingRectangles();
    document.querySelector("#background-remove").style.visibility = "visible";
    document.querySelector("#modal-container-remove").style.visibility = "visible";
  };
  
//   var clearCheckedElementsInModalRemove = function clearCheckedElementsInModal() {
//     var modal = document.querySelector("#modal-body-remove");
//     var icons = modal.querySelectorAll("i");
  
//     icons.forEach(function(icon) {
//       icon.remove();
//     });
//   };
  
  document.querySelector("#close-remove").addEventListener("click", closeModalRemove);
  document.querySelector("#remove-button").addEventListener("click", openModalRemove);
  
  var populateExistingRectangles = function() {
    document.querySelector("#remove-rectangles-display").innerHTML = "";
    container.rectangleSet.forEach(function(rectangle) {
      addExistingRectangleToDisplay(
        container.rectangleSet.indexOf(rectangle),
        rectangle.color
      );
    });
  };
  
  function addExistingRectangleToDisplay(index, rectangleColor) {
    var existingRectangle = document.createElement("div");
    var existingRectangleButton = document.createElement("button");
    existingRectangleButton.classList.add("remove-rectangle");
    existingRectangle.appendChild(existingRectangleButton);
    document
      .querySelector("#remove-rectangles-display")
      .appendChild(existingRectangle);
  
    var color = rectangleColor.toString();
    var index = index;
  
    existingRectangleButton.classList.add(color);
    existingRectangleButton.innerHTML = index;
    existingRectangleButton.setAttribute("data-index", index);
    existingRectangleButton.setAttribute("type", "button");
  }

  document
  .querySelector("#remove-rectangles-display")
  .addEventListener("click", function(button) {
    if (button.target && button.target.nodeName == "BUTTON") {
      if (button.target.dataset.index) {
        index = parseInt(button.target.dataset.index);
      }
removeElementCheckClassFromModalRemove();
    button.target.classList.add("to-remove-checked");
    }
  });
  
  const removeElementCheckClassFromModalRemove = function() {
    let buttons = document.querySelectorAll("#remove-rectangles-display button");
    buttons.forEach(function(positionButton) {
      if (positionButton.classList.contains("to-remove-checked")) {
        positionButton.classList.remove("to-remove-checked");
      }
    });
  };

  document
    .querySelector("#remove-rectangle-button")
    .addEventListener("click", function() {
    
      container.removeRectangle(index);
      closeModalRemove();
    });
  
  