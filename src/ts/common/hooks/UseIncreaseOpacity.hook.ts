import { useEffect, useState } from "react";

interface UseIncreaseOpacityProps {
  htmlElemClassName: string;
}

export const useIncreaseOpacity = (prop: UseIncreaseOpacityProps) => {
  const [isGreetAnimeDone, setIsGreetAnimeDone] = useState<boolean>(false);

  const greetingClassName = "h1-greeting";

  useEffect(() => {
    const intervalId = setInterval(() => {
      const animationElems = document.getElementsByClassName(greetingClassName);

      if (animationElems.length === 0) {
        clearInterval(intervalId);
        setIsGreetAnimeDone(true);
      }
    }, 500);
  }, []);

  useEffect(() => {
    if (!isGreetAnimeDone) return;

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
  }, [isGreetAnimeDone]);

  return isGreetAnimeDone;
};
