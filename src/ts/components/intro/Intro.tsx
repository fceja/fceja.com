import { useEffect } from "react";

import "@scss/components/Intro.scss"

const Intro = () => {
    useEffect(() => {
        const divElem = document.getElementById('intro-container')

        if (divElem) {
            let cur_opacity = 0.0
            const intervalId = setInterval(() => {
                if (cur_opacity > 1.0) {
                    clearInterval(intervalId)
                }
                divElem.style.opacity = `${cur_opacity}`
                cur_opacity += 0.05

            }, 80)
        }
    }, [])

    return (
        <div id="intro-container" className="shadow" >
            <span className="intro-text">Tools and Technologies I've worked with...</span>
        </div>
    )
}

export default Intro