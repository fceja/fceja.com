import { useEffect, useRef, useState } from "react";

import { GreetingAnimation } from "./GreetingAnimation"


const headings = 3

const Greeting = () => {
    const [isInitiated, setIsInitiated] = useState(false)
    const [isDone, setIsDone] = useState(false)
    const line1Ref = useRef<HTMLHeadingElement>(null)
    const line2Ref = useRef<HTMLHeadingElement>(null)
    const line3Ref = useRef<HTMLHeadingElement>(null)


    useEffect(() => {
        setIsInitiated(true)
        GreetingAnimation(headings)
    }, [])

    /**
     * Once animation is initiated, we check if elem's exist in DOM.
     * In order to let animation complete, we interval until
     * all opacities are zero (not visible).
     * Then, remove from DOM.
    **/
    useEffect(() => {
        const htmlElem1 = line1Ref.current;
        const htmlElem2 = line2Ref.current;
        const htmlElem3 = line3Ref.current;

        // check if elem's exist in DOM
        if (!htmlElem1 || !htmlElem2 || !htmlElem3) return

        const intervalId = setInterval(() => {
            // retrieve opacities
            const opacity1 = window.getComputedStyle(htmlElem1).opacity;
            const opacity2 = window.getComputedStyle(htmlElem2).opacity;
            const opacity3 = window.getComputedStyle(htmlElem3).opacity;

            // checks if all zero
            if (!parseFloat(opacity1) && !parseFloat(opacity2) && !parseFloat(opacity3)) {
                setIsDone(true)
                clearInterval(intervalId)
            }
        }, 750)

    }, [isInitiated])

    return isDone ? null :
        <>
            <h1 ref={line1Ref} className="h1-greeting heading-1 hidden">
                <span className="text-wrapper">
                    <span className="line line1"></span>
                    <span className="letters1">Hello.</span>
                </span>
            </h1>
            <h1 ref={line2Ref} className="h1-greeting heading-2 hidden">
                <span className="text-wrapper">
                    <span className="line line2"></span>
                    <span className="letters2">I'm Francisco.</span>
                </span>
            </h1>
            <h1 ref={line3Ref} className="h1-greeting heading-3 hidden">
                <span className="text-wrapper">
                    <span className="line line3"></span>
                    <span className="letters3">I <span>&#x2764;</span> code.</span>
                </span>
            </h1>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
        </>
}

export default Greeting