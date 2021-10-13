import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./Footer";
import TermsOfService from "./pages/TermsOfService";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <section className="flex justify-between items-center px-4 py-6">
          <p className="font-sans text-3xl font-bold text-gray-600">
            Bubu's Fabric
          </p>
          <section className="space-x-2">
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact us</Link>
          </section>
          <section>Menu 2</section>
        </section>

        <section className="pb-12">
          <Switch>
            <Route exact path="/" children={<Home />} />
            <Route path="/about" children={<AboutUs />} />
            <Route path="/contact" children={<ContactUs />} />
            <Route path="/terms_of_service" children={<TermsOfService />} />
          </Switch>
        </section>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
