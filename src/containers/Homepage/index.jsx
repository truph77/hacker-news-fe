import React, { useEffect, useState } from "react";
import Homepage from "components/Homepage";
import { getNewsList } from "actions/news.actions";
import { useSearchParams } from "react-router-dom";

const HomepageContainer = () => {
  const [newsList, setNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);
  const [searchParams] = useSearchParams();
  let page = searchParams.get("page") || 1;

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await getNewsList(page).then((data) => setNewsList(data));
      setIsLoading(false);
    }
    fetchData();
  }, [page]);

  console.log(newsList);
  return <Homepage newsList={newsList} isLoading={isLoading} page={page} />;
};

export default HomepageContainer;
