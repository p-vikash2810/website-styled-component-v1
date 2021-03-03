import { Navbar } from "./components";
import GlobalStyle from "./globalStyle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyle />
        <Navbar />
    </Router>
  );
}

export default App;
