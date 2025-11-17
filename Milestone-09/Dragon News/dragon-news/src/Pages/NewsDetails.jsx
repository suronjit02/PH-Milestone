import React, { useEffect, useState } from "react";
import RightAside from "../components/homeLayout/RightAside";
import NewsDetailsCard from "../components/NewsDetailsCard";
import Header from "../components/Header";
import { useLoaderData, useParams } from "react-router";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  //   console.log(data, id, news);

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);

    setNews(newsDetails);
  }, [data, id]);

  return (
    <div>
      <header className="w-11/12 m-auto mt-4">
        <Header></Header>
      </header>

      <main className="w-11/12 m-auto mt-5 grid grid-cols-12 gap-5">
        <section className="col-span-9 mt-5 ">
          <NewsDetailsCard news={news}></NewsDetailsCard>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
