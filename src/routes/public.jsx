import { Routes, Route } from "react-router-dom";
import HomepageContainer from "containers/Homepage";

import PageNotFound from "pages/NotFound";
import CommentsContainer from "containers/Comments";

const Public = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomepageContainer />} />
        {/* <Route path="/:page" element={<HomepageContainer />} /> */}
        <Route path="/news" element={<HomepageContainer />} />
        <Route path="/item" element={<CommentsContainer />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Public;
