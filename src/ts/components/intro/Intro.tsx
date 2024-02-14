import { useEffect, useState } from "react";

import "@scss/components/Intro.scss"

const Intro = () => {
    const [isGreetAnimeDone, setIsGreetAnimeDone] = useState<boolean>(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
            const animationElems = document.getElementsByClassName('h1-greeting')

            if (animationElems.length === 0) {
                clearInterval(intervalId)
                setIsGreetAnimeDone(true)
            }
        }, 500)
    }, [])

    useEffect(() => {
        const divElem = document.getElementById('intro-container')

        if (!divElem) return
        if (!isGreetAnimeDone) return

        divElem.style.display = '';

        let cur_opacity = 0.0
        const intervalId = setInterval(() => {
            if (cur_opacity > 1.0) clearInterval(intervalId)

            divElem.style.opacity = `${cur_opacity}`
            cur_opacity += 0.05

        }, 80)

    }, [isGreetAnimeDone])

    return !isGreetAnimeDone ? null :
        <div id="intro-container" className="shadow" style={{ display: 'none', opacity: 0 }}>
            <span className="intro-text">Tools and Technologies I've worked with... ↓</span>
        </div>
}

export default Intro