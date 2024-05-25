function main() {
  console.log("Script is executed");
  document.querySelectorAll("circle").forEach((circle) => {
    circle.addEventListener("mousedown", clickedNode);
  });
}

let inEdge = null;
let outEdge = null;

function clickedNode(event) {
const circle = event.target;
const entireSVG = document.querySelector("#graph");
entireSVG.addEventListener("mousemove", moveNode);
entireSVG.addEventListener("mouseup", releaseNode);

const svgRect = entireSVG.getBoundingClientRect();
const mouseX = event.clientX - svgRect.x;
const mouseY = event.clientY - svgRect.y;

const offSetX = mouseX - circle.getAttribute("cx");
const offSetY = mouseY - circle.getAttribute("cy");

  setEdges(circle.id);

  function moveNode(moveEvent) {
    const svgRect = entireSVG.getBoundingClientRect();

    const mouseX = moveEvent.clientX - svgRect.x - offSetX;
    const mouseY = moveEvent.clientY - svgRect.y - offSetY;

    circle.setAttribute("cx", mouseX);
    circle.setAttribute("cy", mouseY);

    inEdge.setAttribute("x2", mouseX);
    inEdge.setAttribute("y2", mouseY);
    outEdge.setAttribute("x1", mouseX);
    outEdge.setAttribute("y1", mouseY);
  }

  function releaseNode() {
    entireSVG.removeEventListener("mousemove", moveNode);
    entireSVG.removeEventListener("mouseup", releaseNode);
  }
}

function setEdges(circleId) {
    switch (circleId) {
        case "node1":
          inEdge = document.querySelector("#edgeD");
          outEdge = document.querySelector("#edgeA");
          break;
        case "node2":
          inEdge = document.querySelector("#edgeA");
          outEdge = document.querySelector("#edgeB");
          break;
        case "node3":
          inEdge = document.querySelector("#edgeB");
          outEdge = document.querySelector("#edgeC");
          break;
        case "node4":
          inEdge = document.querySelector("#edgeC");
          outEdge = document.querySelector("#edgeD");
          break;
      }
}

main();
