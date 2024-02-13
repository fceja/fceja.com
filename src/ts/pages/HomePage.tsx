import { useEffect, useState } from "react"

import "@scss/pages/HomePage.scss";
import Loading from "@components/Loading"


const HomePage = () => {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)

        }, 2000)
    }, [])

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