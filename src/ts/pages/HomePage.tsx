import { useEffect, useState } from "react"

import "@scss/pages/HomePage.scss";
import Loading from "@common/components/Loading"
import Greeting from "@components/greeting/Greeting"
import Intro from "@components/intro/Intro"


const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <>
            {isLoading &&
                <Loading />
            }
            < Greeting />
            < Intro />
        </>
    )

}

export default HomePage