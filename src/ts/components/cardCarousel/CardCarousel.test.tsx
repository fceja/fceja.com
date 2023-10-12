import { render, screen } from "@testing-library/react";

import CardCarousel from "./CardCarousel";
import { CardCarouselCardData } from "./CardCarouselCardData";

// CardCarousel component tests
describe("CardCarousel component tests", () => {
  test("validate rendered cards length matches input cards length", () => {
    // render comp
    render(<CardCarousel />);

    // get card html element(s)
    const htmlElem = screen.getAllByTestId("card");

    // validate lengths
    expect(htmlElem.length).toBe(CardCarouselCardData.length);
  });
});
