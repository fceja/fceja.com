export type LinksDataArray = {
  languageLibraryFramework: LinksDataType[];
};

type LinksDataType = {
  href: string;
  img: {
    src: string;
    alt: string;
  };
};
