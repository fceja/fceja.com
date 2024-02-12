import { WebLinksType } from "@components/webLinks/WebLinksTypes";
import { CardDetailsType } from "@components/cardDetails/CardDetailsTypes"

export type CardArrayType = {
  cardArray: readonly CardType[];
};

export type CardType = {
  cardDetails: CardDetailsType;
  index: number | null;
  webLinks: WebLinksType;
};
