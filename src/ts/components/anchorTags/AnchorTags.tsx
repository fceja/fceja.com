import "@scss/components/AnchorTags.scss"
import { SubSectionContentProps } from "@content/SubSectionContent";

interface AnchorTagsProps {
    aTagData: SubSectionContentProps
}

const AnchorTags = (props: AnchorTagsProps) => {
    const { aTagData } = props

    return (
        <p className="atag-content">
            {
                aTagData.anchorTagData.map((elem, i) => {
                    return (
                        <a key={`${i}-${elem.img.alt}`} href={elem.href} target="_blank" rel="noreferrer">
                            <img src={elem.img.src} alt={elem.img.alt} width="60" height="60" />
                        </a>
                    );
                })
            }
        </p>
    )
}

export default AnchorTags