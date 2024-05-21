import "@scss/components/SubSection.scss";
import { useIncreaseOpacity } from "@common/hooks/UseIncreaseOpacity.hook";
import { SubSectionContentProps } from "@content/SubSectionContent";

interface SubSectionProps {
  sectionContent: Readonly<SubSectionContentProps[]>
}

const getAnchorTags = (data: SubSectionContentProps) => {
  const aTags = data.anchorTagData.map((elem, i) => {
    return (
      <a key={`${i}-${elem.img.alt}`} href={elem.href} target="_blank" rel="noreferrer">
        <img src={elem.img.src} alt={elem.img.alt} width="60" height="60" />
      </a>
    );
  });

  return aTags
}

const SubSections = (props: SubSectionProps) => {
  useIncreaseOpacity({
    htmlElemClassName: "sub-section",
  });

  const { sectionContent } = props

  return (
    <>
      {
        sectionContent.map((elem, i) => {
          const anchorTags = getAnchorTags(elem)

          return (
            <section key={`subsection-${i}`} className="sub-section init-zero-opac">
              <h2 className="sub-heading">{elem.title}</h2>
              <p className="p-contents">{anchorTags}</p>
            </section>
          );
        })
      }
    </>
  )
};

export default SubSections;
