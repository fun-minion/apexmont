import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Home from "./pages/Home";
import Team from "./pages/Team";
import Strategies from './pages/Strategies';
import Contact from "./pages/Contact";
import Auth from './pages/Auth';
import PrivacyPolicy from "./pages/Privacy-Policy";
import TermsOfService from "./pages/Terms-of-Service";
import Disclaimer from "./pages/Disclaimer";
import PIFocus from "./pages/Private-Investment-Focus";

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
          <Route path="/privacy-policy" Component={PrivacyPolicy} />
          <Route path="/terms-of-service" Component={TermsOfService} />
          <Route path="/disclaimer" Component={Disclaimer} />
          <Route path="/private-investment-focus" Component={PIFocus} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
