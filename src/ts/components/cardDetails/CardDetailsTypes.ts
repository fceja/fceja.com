export type CardDetailsType = {
  title: string;
  description: string;
  listSections: ListSectionType[];
};

type ListSectionType = {
  title: string;
  listItems: string[];
};