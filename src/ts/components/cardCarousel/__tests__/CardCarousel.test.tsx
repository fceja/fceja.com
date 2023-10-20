import { render, screen } from "@testing-library/react";

import CardCarousel from "@components/cardCarousel/CardCarousel";
import { CardCarouselCardData } from "@components/cardCarousel/CardCarouselCardData";

// CardCarousel component tests
describe("CardCarousel component tests", () => {
  test("validate rendered cards length matches input cards length", () => {
    render(<CardCarousel />);

    // get card html element(s)
    const htmlElem = screen.getAllByTestId("card");
    console.log(`CardCarouselCardData.length -> ${CardCarouselCardData.length}`)
    console.log(`htmlElem.length -> ${htmlElem.length}`)

    // validate lengths
    expect(htmlElem.length).toBe(CardCarouselCardData.length);
  });
});