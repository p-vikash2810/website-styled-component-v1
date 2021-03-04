import { Navbar } from "./components";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <switch>
        <Route path="/" exact component={Home} />
      </switch>
    </Router>
  );
}

export default App;
