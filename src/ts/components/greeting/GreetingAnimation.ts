import anime from "animejs/lib/anime.es.js";

import "@scss/components/GreetingAnimation.scss";

export const GreetingAnimation = (headings: number) => {
  /**
   * Iterate over each heading, applying animation
   **/
  for (let i = 1; i <= headings; i++) {
    // retirieve ith heading
    const textWrapper = document.querySelector(`.heading-${i} .letters${i}`);
    const heading = document.querySelector(`.heading-${i}`) as HTMLElement;

    // make display csss prop visible
    if (heading) {
      heading.style.display = "block"; // make visible
    }

    // if heading found
    if (textWrapper && textWrapper.textContent) {
      // parse inner html
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /([^\x00-\x80]|\w|\.|'|,)/g,
        `<span class='letter${i}'>$&</span>`,
      );

      // last heading contains a heart in text
      // loop through each element, add heart id for css
      if (i == headings) {
        const letterElements = textWrapper.querySelectorAll(`.letter${i}`);
        letterElements.forEach((letterElement) => {
          if (letterElement.textContent === "❤") {
            letterElement.id = "heart";
          }
        });
      }

      // apply animation for ith element
      anime
        .timeline({ loop: false })
        .add({
          targets: `.heading-${i} .line${i}`,
          scaleY: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: 600 * (i * 1.4), // delay display
        })
        .add({
          targets: `.heading-${i} .line${i}`,
          translateX: [0, textWrapper.getBoundingClientRect().width + 10],
          easing: "easeOutExpo",
        })
        .add({
          targets: `.heading-${i} .letter${i}`,
          opacity: [0, 1],
          easing: "easeOutExpo",
          offset: "-=775",
        })
        .add({
          targets: `.heading-${i}`,
          opacity: 0,
          easing: "easeOutExpo",
        });
    }
  }
};
