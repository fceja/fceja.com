import "@scss/components/SubSection.scss";
import AnchorTags from "@components/anchorTags/AnchorTags"
import { SubSectionContent } from "@content/SubSectionContent";
import { useIncreaseOpacity } from "@common/hooks/UseIncreaseOpacity";

const SubSections = () => {
  useIncreaseOpacity({
    htmlElemClassName: "sub-section",
  });

  return (
    <>
      {
        SubSectionContent.map((elem, i) => {
          return (
            <section key={`subsection-${i}`} className="sub-section init-zero-opac">
              <h2 className="sub-heading">{elem.title}</h2>
              <AnchorTags aTagData={elem} />
            </section>
          );
        })
      }
    </>
  )
};

export default SubSections;
