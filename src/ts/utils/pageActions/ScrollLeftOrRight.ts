// script that scrolls page container left or right
export const ScrollLeftOrRight = (scrollDirection: string, elemId: string) => {
  var containerDiv = document.getElementById(elemId) as HTMLElement;

  if (scrollDirection === "left") {
    containerDiv.scrollLeft = containerDiv.scrollLeft - 325;
  } else if (scrollDirection === "right") {
    containerDiv.scrollLeft = containerDiv.scrollLeft + 325;
  } else {
    console.error(`Invalid scroll direction: ${scrollDirection}`);
  }
};
