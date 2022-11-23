import { Routes, Route } from "react-router-dom";
import HomepageContainer from "containers/Homepage";

// import PageNotFound from "pages/NotFound";

const Public = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomepageContainer />} />
        {/* <Route path="*" component={PageNotFound} /> */}
      </Routes>
    </>
  );
};

export default Public;
