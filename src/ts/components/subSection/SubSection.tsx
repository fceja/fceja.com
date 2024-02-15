import "@scss/components/SubSection.scss";

import { SubSectionContentProps } from "@content/SubSectionContent";

type SubSectionProps = SubSectionContentProps;

const SubSection = (props: SubSectionProps) => {
  const anchorTags = props.anchorTagData.map((elem, i) => {
    return (
      <a key={`${i}-a-img`} href={elem.href} target="_blank" rel="noreferrer">
        <img src={elem.img.src} alt={elem.img.alt} width="60" height="60" />
      </a>
    );
  });

  return (
    <section className="sub-section">
      <h2 className="sub-heading">{props.title}</h2>
      <p className="p-contents">{anchorTags}</p>
    </section>
  );
};

export default SubSection;
