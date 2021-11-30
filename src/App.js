import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Transition, Menu } from "@headlessui/react";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Footer from "./Footer";
import TermsOfService from "./pages/TermsOfService";

import "./App.css";

const BasicLayout = ({ children }) => {
  return (
    <section className="w-full">
      <>{children}</>
    </section>
  );
};

const CenterLayout = ({ children }) => {
  return (
    <section className="w-8/12">
      <>{children}</>
    </section>
  );
};

const PageNotFound = (props) => {
  return (
    <section className="w-full flex justify-center pt-20">
      <p>Page not found</p>
    </section>
  );
};

const NavigationLinks = (props) => {
  return (
    <section className="space-x-2 filter blur">
      <NavLink
        to="/about-us"
        className={(active) =>
          "" +
          (active ? "border-b-2 border-gray-200 px-12 text-purple-500" : "")
        }
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        className={(active) =>
          "" +
          (active ? "border-b-2 border-gray-200 px-12 text-purple-500" : "")
        }
      >
        Contact
      </NavLink>
    </section>
  );
};

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
      <div className="relative max-w-screen min-h-screen bg-gray-50 pb-20">
        <section className="flex justify-between items-center p-8">
          <Link to="/">
            <p className="font-indie text-3xl font-bold text-purple-700">
              Bubu's Fabric
            </p>
          </Link>
          <div>
            <section className="hidden flex space-x-2 md:block">
              <NavigationLinks />
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

        <section className="flex flex-col justify-center items-center">
          <Switch>
            <Route
              exact
              path="/"
              children={
                <BasicLayout>
                  <Home />
                </BasicLayout>
              }
            />
            <Route
              path="/about-us"
              children={
                <CenterLayout>
                  <AboutUs />
                </CenterLayout>
              }
            />
            <Route
              path="/contact"
              children={
                <CenterLayout>
                  <ContactUs />
                </CenterLayout>
              }
            />
            <Route
              path="/terms-of-service"
              children={
                <CenterLayout>
                  <TermsOfService />
                </CenterLayout>
              }
            />
            <Route
              path="*"
              children={
                <BasicLayout>
                  <PageNotFound />
                </BasicLayout>
              }
            />
          </Switch>
        </section>

        <section className="absolute bottom-0 left-0 right-0 bg-gray-600">
          <Footer />
        </section>

        <Transition
          show={true}
          enter="transition-opacity duration-75"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed z-50 top-0 bottom-0 left-0 right-0 w-screen h-screen flex flex-col justify-center items-center "
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        >
          <p className="font-patrick text-4xl text-white">
            Site under construction
          </p>
        </Transition>
      </div>
    </Router>
  );
}

export default App;
