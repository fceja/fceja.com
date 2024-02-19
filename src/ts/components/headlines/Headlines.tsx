import { useEffect, useState } from "react";

import "@scss/components/Headlines.scss";
import Loading from "@common/components/Loading";

type ResponseData = {
  status: string;
  articles: [
    {
      source: { name: string };
      title: string;
      url: string;
    },
  ];
};

const Headlines = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [headlineElems, setHeadLineElems] = useState<JSX.Element[]>([]);
  const [headlines, setHeadlines] = useState<{ source: string; url: string }[]>(
    [],
  );
  const [responseData, setResponseData] = useState<ResponseData | null>(null);

  useEffect(() => {
    if (!responseData || responseData.status !== "ok") return;

    responseData.articles.forEach((article) => {
      if (article.title.includes("Removed")) {
        return;
      }

      setHeadlines((headlines) => [
        ...headlines,
        {
          source: `${article.title}`,
          url: article.url,
        },
      ]);
    });
  }, [responseData]);

  useEffect(() => {
    const headlineElems = headlines.map((elem, index) => {
      return (
        <li key={index}>
          <a
            href={`${elem.url}`}
            target="_blank"
            rel="noreferrer"
            style={{ color: "black" }}
          >{`${elem.source}`}</a>
        </li>
      );
    });

    setHeadLineElems(headlineElems);
  }, [headlines]);

  useEffect(() => {
    const storedData = sessionStorage.getItem("responseData");
    if (storedData) {
      setResponseData(JSON.parse(storedData));
      return;
    }

    setIsLoading(true);

    // fetch data
    const fetchData = async () => {
      try {
        // generate api url
        const endpoint = "top-headlines";
        const country = "country=us";
        const category = "category=business";
        const queryParams = `${category}&${country}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

        const apiUrl = `${process.env.REACT_APP_NEWS_API_BASE_URL}/${endpoint}?${queryParams}`;

        // fetch data
        const response = await fetch(apiUrl);
        const data = await response.json();
        setResponseData(data);
        sessionStorage.setItem("responseData", JSON.stringify(data));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="scroll-container">
      {isLoading ? <Loading /> : <ul className="link-list">{headlineElems}</ul>}
    </div>
  );
};

export default Headlines;
