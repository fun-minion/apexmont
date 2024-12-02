import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Strategies from './pages/Strategies';
import Contact from "./pages/Contact";
import Auth from './pages/Auth';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/team" Component={Team} />
          <Route path="/strategies" Component={Strategies} />
          <Route path="/contact" Component={Contact} />
          <Route path="/auth" Component={Auth} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
