import React from "react";
import { CTLink, WrapFooter } from "./styles";

const Links = [
  {
    title: "Guidelines",
    url: "/#",
  },
  {
    title: "FAQs",
    url: "/#",
  },
  {
    title: "List",
    url: "/#",
  },
  {
    title: "API",
    url: "/#",
  },
  {
    title: "Security",
    url: "/#",
  },
  {
    title: "Legal",
    url: "/#",
  },
  {
    title: "Apply to YC",
    url: "/#",
  },
  {
    title: "Contact",
    url: "/#",
  },
];

const Footer = () => {
  return (
    <WrapFooter>
      <div className="footer-styles">
        <div>
          {Links.map((link, index) => (
            <span key={index}>
              <CTLink to={link.url}>{link.title}</CTLink>
              {link.title !== "Contact" && " | "}
            </span>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 5 }}>
          Search: <input />
        </div>
      </div>
    </WrapFooter>
  );
};

export default Footer;
