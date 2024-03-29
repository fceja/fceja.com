import { render, screen } from "@testing-library/react";

import CardCarousel from "@components/cardCarousel/CardCarousel";
import { CardsContent } from "@content/CardContent";

// CardCarousel component tests
describe("CardCarousel component tests", () => {
  test("validate rendered cards length matches input cards length", () => {
    render(<CardCarousel />);

    // get card html element(s)
    const htmlElem = screen.getAllByTestId("card");

    // validate lengths
    expect(htmlElem.length).toBe(CardsContent.length);
  });
});
