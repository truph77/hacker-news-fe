import { baseURL } from "constants/backend_url";
import axios from "axios";

export const getNewsList = async (page) => {
  let pagesize = 30;
  let news = await axios.get(`${baseURL}/topstories.json?print=pretty`);

  page = page === 0 ? 0 : page - 1;

  const slicedNews = news.data.slice(
    Number(page) * Number(pagesize),
    (Number(page) + 1) * Number(pagesize)
  );

  const jsonArticles = slicedNews.map(async function (post) {
    return await (await axios.get(
        `${baseURL}/item/${post}.json?print=pretty`
      )).data;
  });

  const returnedData = Promise.all(jsonArticles);

  return returnedData;
};
