import { useEffect, useState } from "react"

import "@scss/pages/HomePage.scss";
import Loading from "@components/Loading"


type ResponseData = {
    status: string,
    articles: [{
        source: { name: string },
        title: string
    }],

}

const apiUrl = ""

const HomePage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [responseData, setResponseData] = useState<ResponseData | null>(null)
    const [headlines, setHeadlines] = useState<string[]>([])

    useEffect(() => {
        if (!responseData || responseData.status !== 'ok') return;

        responseData.articles.forEach((article) => {
            if (article.title.includes('Removed')) {
                return // continue

            }
            setHeadlines(headlines => [...headlines, `${article.source.name} - ${article.title}`])
        })

    }, [responseData])

    useEffect(() => {
        console.log(`headlines 3-> ${headlines}`)

    }, [headlines])

    useEffect(() => {
        setIsLoading(true)

        // fetch data
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl)
                const data = await response.json()
                setResponseData(data)

            } catch (error) {
                console.error(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()

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