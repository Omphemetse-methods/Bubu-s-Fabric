import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Transition } from "@headlessui/react";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./Footer";
import TermsOfService from "./pages/TermsOfService";
import Products from "./pages/Products";

import "./App.css";

function PageNotFound(props) {
  return (
    <section>
      <p>Page not found</p>
    </section>
  );
}

const MenuBar = ({ isShowing, onClose }) => {
  return (
    <Transition
      show={isShowing}
      enter="tranform transition duration-[400ms]"
      enterFrom=""
      enterTo=""
      className="fixed left-0 top-0 w-screen h-screen z-10 flex justify-end"
    >
      <section className="h-screen w-96 bg-white shadow-lg bg-gray-100">
        <button onClick={onClose}>x</button>
        <p>Menu </p>
      </section>
    </Transition>
  );
};

function App() {
  const [isMenu, setIsMenu] = useState(false);

  function handleOnClose() {
    setIsMenu(false);
  }

  return (
    <Router>
      <div className="relative w-screen min-h-screen bg-gray-50 space-y-2">
        <section className="flex justify-between items-center py-8 px-2">
          <p className="font-sans text-3xl font-bold text-gray-600">
            Bubu's Fabric
          </p>
          <div>
            <section className="hidden md:block">
              <Link to="/">Home</Link>
              <Link to="/about">About us</Link>
              <Link to="/contact">Contact us</Link>
              <Link to="/products">Products</Link>
            </section>

            <section className="block md:hidden">
              <button onClick={() => setIsMenu(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </section>

            <MenuBar isShowing={isMenu} onClose={handleOnClose} />
          </div>
        </section>

        <section className="flex justify-center">
          <section className="w-full md:w-8/12">
            <Switch>
              <Route exact path="/" children={<Home />} />
              <Route path="/about" children={<AboutUs />} />
              <Route path="/contact" children={<ContactUs />} />
              <Route path="/terms-of-service" children={<TermsOfService />} />
              <Route path="/products" children={<Products />} />
              <Route path="*" children={<PageNotFound />} />
            </Switch>
          </section>
        </section>

        <section className="absolute bottom-0">
          <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;
