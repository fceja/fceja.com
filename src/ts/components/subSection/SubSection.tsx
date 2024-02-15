import "@scss/components/SubSection.scss";
import { LinksData } from "@data/linkData/LinkData";

const subTitle = "Languages / Libraries / Frameworks";
const anchorTags = LinksData.languageLibraryFramework.map((elem, i) => {
  return (
    <a key={`${i}-a-img`} href={elem.href} target="_blank" rel="noreferrer">
      <img src={elem.img.src} alt={elem.img.alt} width="60" height="60" />
    </a>
  );
});

const SubSection = () => {
  return (
    <section className="sub-section">
      <h2 className="sub-heading">{subTitle}</h2>
      <p className="p-contents">{anchorTags}</p>
    </section>
  );
};

export default SubSection;
