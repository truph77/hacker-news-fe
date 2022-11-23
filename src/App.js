import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes";

const App = () => {
  return (
    <Router>
      <div style={{ background: "#FFFFFF" }}>
        <Routes />
      </div>
    </Router>
  );
};

export default App;
