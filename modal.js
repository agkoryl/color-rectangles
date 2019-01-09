var closeModal = function closeModal() {
  document.querySelector("#background").style.visibility = "hidden";
  document.querySelector("#modal-container").style.visibility = "hidden";
};

var openModal = function openModal() {
  populatePositionRow();
  document.querySelector("#background").style.visibility = "visible";
  document.querySelector("#modal-container").style.visibility = "visible";
  clearCheckedElementsInModal();
};

var clearCheckedElementsInModal = function clearCheckedElementsInModal() {
  var modal = document.querySelector("#modal-body");
  var icons = modal.querySelectorAll("i");

  icons.forEach(function(icon) {
    icon.remove();
  });
};

document.querySelector("#close").addEventListener("click", closeModal);
document.querySelector("#add-button").addEventListener("click", openModal);

var populatePositionRow = function() {
  document.querySelector("#position-rectangles-body").innerHTML = "";
  container.rectangleSet.forEach(function(rectangle) {
    addExistingRectangleToPositionRow(
      container.rectangleSet.indexOf(rectangle),
      rectangle.color
    );
  });
};

function addExistingRectangleToPositionRow(index, rectangleColor) {
  var positionRectangle = document.createElement("div");
  var positionRectangleButton = document.createElement("button");
  positionRectangleButton.classList.add("position-rectangle-button");
  positionRectangle.appendChild(positionRectangleButton);
  document
    .querySelector("#position-rectangles-body")
    .appendChild(positionRectangle);

  var color = rectangleColor.toString();
  var index = index;

  positionRectangleButton.classList.add(color);
  positionRectangleButton.innerHTML = index;
  positionRectangleButton.setAttribute("data-index", index);
  positionRectangleButton.setAttribute("type", "button");
}

document
  .querySelector("#create-rectangle-button")
  .addEventListener("click", function() {
    container.addRectangle(new Rectangle(size, color, index));
    closeModal();
  });
