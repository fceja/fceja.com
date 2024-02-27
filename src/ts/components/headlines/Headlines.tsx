import { useEffect, useState } from "react";

import "@scss/components/Headlines.scss";
import Loading from "@common/components/Loading";

type ResponseData = {
  data: [
    {
      title: string;
      source: string;
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
    if (!responseData || responseData.data.length <= 0) return;
    responseData.data.forEach((article) => {
      setHeadlines((headlines) => [
        ...headlines,
        {
          source: `${article.title} - ${article.source}`,
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
        const apiUrl = `${process.env.REACT_APP_AWS_API_URL}/news/top`;

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
      {isLoading ? (
        <Loading className="headlines-loading" />
      ) : (
        <ul className="link-list">{headlineElems}</ul>
      )}
    </div>
  );
};

export default Headlines;
