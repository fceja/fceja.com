import { useEffect, useState } from "react";

interface UseIncreaseOpacityProps {
  htmlElemClassName: string;
}

export const useIncreaseOpacity = (prop: UseIncreaseOpacityProps) => {
  useEffect(() => {
    const divElems = document.getElementsByClassName(prop.htmlElemClassName);

    if (divElems.length != 0) {
      Array.from(divElems).forEach((elem) => {
        const divElem = elem as HTMLElement;
        divElem.style.display = "block";
        let cur_opacity = 0.0;
        const intervalId = setInterval(() => {
          if (cur_opacity > 1.0) clearInterval(intervalId);
          divElem.style.opacity = `${cur_opacity}`;
          cur_opacity += 0.05;
        }, 80);
      });
    }
  }, []);
};
