import { useState, useEffect } from "react"

const useAnimationIsDone = () => {
    const [isGreetAnimeDone, setIsGreetAnimeDone] = useState<boolean>(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const animationElems = document.getElementsByClassName("h1-greeting");

            if (animationElems.length === 0) {
                clearInterval(intervalId);
                setIsGreetAnimeDone(true);
            }
        }, 300);
    }, []);

    return isGreetAnimeDone
}

export default useAnimationIsDone