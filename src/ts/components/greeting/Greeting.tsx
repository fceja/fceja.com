import { useEffect } from "react";

import { GreetingAnimation } from "./GreetingAnimation"

const Greeting = () => {

    useEffect(() => {
        GreetingAnimation()
    }, [])

    return (
        <>
            <h1 className="ml11">
                <span className="text-wrapper">
                    <span className="line line1"></span>
                    <span className="letters">Hello Goodbye</span>
                </span>
            </h1>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
        </>

    )
}

export default Greeting