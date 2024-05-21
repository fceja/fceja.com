import "@scss/components/SubSection.scss";
import { useIncreaseOpacity } from "@common/hooks/UseIncreaseOpacity.hook";
import { SubSectionContent, SubSectionContentProps } from "@content/SubSectionContent";

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

const SubSections = () => {
  useIncreaseOpacity({
    htmlElemClassName: "sub-section",
  });

  return (
    <>
      {
        SubSectionContent.map((elem, i) => {
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
