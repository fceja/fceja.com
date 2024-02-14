import { useEffect, useState } from "react"

import "@scss/pages/HomePage.scss";
import Loading from "@common/components/Loading"
import Greeting from "@components/greeting/Greeting"


const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <>
            {isLoading &&
                <Loading />
            }
            < Greeting />
            <div className="home-page-container shadow" >
                <span className="home-page-intro">Tools and Technologies I've worked with...</span>
            </div>
        </>
    )

}

export default HomePage