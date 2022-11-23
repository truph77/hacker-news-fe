import React, { useEffect, useState } from "react";
import { getChildrenComments, getComments } from "actions/comments.actions";
import { useSearchParams } from "react-router-dom";
import Comments from "components/Comments";

const CommentsContainer = () => {
  const [commentList, setCommentList] = useState([]);
  const [commentChildrenList, setCommentChildrenList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  let id = searchParams.get("id");

  useEffect(() => {
    async function fetchData() {
      // setIsLoading(true);
      await getComments(id).then((data) => setCommentList(data));
      // setIsLoading(false);
    }
    fetchData();
  }, [id]);

  useEffect(() => {
    let initArr = [];
    commentList.forEach((item) => {
      if (item.kids) {
        initArr.push(item.kids);
      }
    });
    async function fetchData() {
      setIsLoading(true);
      await getChildrenComments(initArr.flat(1)).then((data) =>
        setCommentChildrenList(data)
      );
      setIsLoading(false);
    }
    fetchData();
  }, [commentList]);

  return (
    <Comments
      commentList={commentList}
      isLoading={isLoading}
      commentChildrenList={commentChildrenList}
    />
  );
};

export default CommentsContainer;
