import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
import { Link } from "react-router-dom";
import { getElapsedTime } from "utils/getElapsedTime";
import { Subscript, Title, WrapHomepage } from "./styles";

const Homepage = ({ newsList, isLoading, page }) => {
  return (
    <>
      <Header />
      {isLoading === true ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <WrapHomepage>
          {newsList &&
            newsList.map((post, index) => {
              const { hostname } = new URL(
                post.url || process.env.REACT_APP_URL
              );

              return (
                <div className="item" key={post.id}>
                  <Title>
                    {/* page_size = 30 */}
                    {(page - 1) * 30 + index + 1}.
                    <span className="arrow-up" />
                  </Title>
                  <span>
                    <span>{post.title}</span>{" "}
                    <a href={post.url} style={{ textDecoration: "none" }}>
                      <span className="hostname"> ({hostname})</span>
                    </a>
                    <Subscript>
                      {post.score} point by {post.by}{" "}
                      {getElapsedTime(post.time)} | hide |{" "}
                      <Link to={`/item?id=${Number(post.id)}`}>
                        {post.descendants}{" "}
                        {post.descendants > 1 ? "comments" : "comment"}
                      </Link>
                    </Subscript>
                  </span>
                </div>
              );
            })}
          <Link
            to={`/news?page=${Number(page) + 1}`}
            style={{ marginLeft: 37 }}
          >
            More
          </Link>
        </WrapHomepage>
      )}
      <Footer />
    </>
  );
};

export default Homepage;
