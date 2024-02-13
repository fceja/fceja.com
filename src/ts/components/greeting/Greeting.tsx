import { useEffect, useRef, useState } from "react";

import { GreetingAnimation } from "./GreetingAnimation"
import { onCompleteType } from "./GreetingTypes";

const Greeting = () => {
    const [isInitiated, setIsInitiated] = useState(false)
    const line1Ref = useRef<HTMLHeadingElement>(null)
    const line2Ref = useRef<HTMLHeadingElement>(null)
    const line3Ref = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const onComplete: onCompleteType = () => {
            setIsInitiated(true)
        }
        GreetingAnimation(onComplete)
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
        if (htmlElem1 && htmlElem2 && htmlElem3) {
            const intervalId = setInterval(() => {
                // retrieve opacities
                const opacity1 = window.getComputedStyle(htmlElem1).opacity;
                const opacity2 = window.getComputedStyle(htmlElem2).opacity;
                const opacity3 = window.getComputedStyle(htmlElem3).opacity;

                // checks if all zero
                if (!parseFloat(opacity1) && !parseFloat(opacity2) && !parseFloat(opacity3)) {
                    // remove elems from DOM
                    htmlElem1.remove();
                    htmlElem2.remove();
                    htmlElem3.remove();

                    clearInterval(intervalId)
                }
            }, 750)
        }
    }, [isInitiated])

    const animationHeadingElems = <>
        <h1 ref={line1Ref} className="heading-1">
            <span className="text-wrapper">
                <span className="line line1"></span>
                <span className="letters1">Hi.</span>
            </span>
        </h1>
        <h1 ref={line2Ref} className="heading-2">
            <span className="text-wrapper">
                <span className="line line2"></span>
                <span className="letters2">I'm Francisco.</span>
            </span>
        </h1>
        <h1 ref={line3Ref} className="heading-3">
            <span className="text-wrapper">
                <span className="line line3"></span>
                <span className="letters3">I <span id="heart">&#x2764;</span> code.</span>
            </span>
        </h1>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
    </>

    return (animationHeadingElems)
}

export default Greeting