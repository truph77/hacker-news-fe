import { baseURL } from "constants/backend_url";
import axios from "axios";

export const getComments = async (id) => {
  let commentList = await axios.get(`${baseURL}/item/${id}.json?print=pretty`);

  const jsonArticles = commentList.data.kids.map(async function (post) {
    return await (await axios.get(
        `${baseURL}/item/${post}.json?print=pretty`
      )).data;
  });

  const returnedData = Promise.all(jsonArticles);

  return returnedData;
};

export const getChildrenComments = async (kids) => {
  const jsonArticles = kids.map(async function (id) {
    return await (await axios.get(
        `${baseURL}/item/${id}.json?print=pretty`
      )).data;
  });

  const returnedData = Promise.all(jsonArticles);

  return returnedData;
};
