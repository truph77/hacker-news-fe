import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";
// import { Link } from "react-router-dom";
import { getElapsedTime } from "utils/getElapsedTime";
import { WrapComments } from "./styles";

const Comments = ({ commentList, isLoading, commentChildrenList }) => {
  return (
    <>
      <Header />
      {isLoading === true ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <WrapComments>
          {commentList.length > 0 &&
            commentList.map((item, index) => {
              return (
                <div key={item.id}>
                  <div className="item">
                    <span className="arrow-up" />
                    <div>
                      <div className="sub-script">
                        <span>{item.by} </span>
                        <span>{getElapsedTime(item.time)}</span>
                        {" | "}
                        <span>next </span>
                        <span>[ - ]</span>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{ __html: item.text }}
                      ></div>
                      <a href="/#" className="reply">
                        reply
                      </a>
                    </div>
                  </div>
                  {item.kids &&
                    commentChildrenList
                      .filter((children) => children.parent === item.id)
                      .map((children) => (
                        <div className="item move-left" key={children.id}>
                          <span className="arrow-up" />
                          <div>
                            <div className="sub-script">
                              <span>{children.by} </span>
                              <span>{getElapsedTime(children.time)}</span>
                              {" | "}
                              <span>next </span>
                              <span>[ - ]</span>
                            </div>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: children.text,
                              }}
                            ></div>
                            <a href="/#" className="reply">
                              reply
                            </a>
                          </div>
                        </div>
                      ))}
                </div>
              );
            })}
        </WrapComments>
      )}
      <Footer />
    </>
  );
};

export default Comments;
