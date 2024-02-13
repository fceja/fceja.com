import { useEffect, useState } from "react"

import Loading from "@components/Loading"
import { ResponseData } from "@components/headlines/HeadlinesTypes"

const apiUrl = ""

const Headlines = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [headlines, setHeadlines] = useState<string[]>([])
    const [responseData, setResponseData] = useState<ResponseData | null>(null)

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
        <div>
            Headlines
            <Loading />
        </div>

    )
}

export default Headlines