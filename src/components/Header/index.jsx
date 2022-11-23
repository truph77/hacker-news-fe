import React from "react";
import { useNavigate } from "react-router-dom";
import { CTLink, LeftSection, WrapHeader } from "./styles";

const Links = [
  {
    title: "new",
    url: "/#",
  },
  {
    title: "past",
    url: "/#",
  },
  {
    title: "comments",
    url: "/#",
  },
  {
    title: "ask",
    url: "/#",
  },
  {
    title: "show",
    url: "/#",
  },
  {
    title: "jobs",
    url: "/#",
  },
  {
    title: "submit",
    url: "/#",
  },
];

const Header = () => {
  const navigative = useNavigate();
  return (
    <WrapHeader>
      <LeftSection>
        <span className="logo" onClick={() => navigative("/")}>
          <img
            src={"https://news.ycombinator.com/y18.gif"}
            alt="hacker news logo"
            style={{ border: "1px solid white" }}
          />
          <strong style={{ padding: "0 4px" }}>Hacker News</strong>
        </span>
        <div>
          {Links.map((link, index) => (
            <span key={index}>
              <CTLink to={link.url}>{link.title}</CTLink>
              {link.title !== "submit" && " | "}
            </span>
          ))}
        </div>
      </LeftSection>
      <CTLink to="/login">Login</CTLink>
    </WrapHeader>
  );
};

export default Header;
