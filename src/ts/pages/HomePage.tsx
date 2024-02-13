import { useEffect, useState } from "react"

import "@scss/pages/HomePage.scss";
import Loading from "@components/Loading"


const HomePage = () => {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <>
            {isLoading &&
                <Loading />
            }
            <div className="home-page-intro" >
            </div>
        </>
    )

}

export default HomePage