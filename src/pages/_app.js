import React from "react";
import Navbar from "./../components/Navbar";
import IndexPage from "./index";
import AboutPage from "./about";
import PricingPage from "./pricing";
import ContactPage from "./contact";
import SigninPage from "./signin";
import SignupPage from "./signup";
import ForgotpassPage from "./forgotpass";
import ChangepassPage from "./changepass";
import SupportPage from "./support";
import { Switch, Route, Router } from "./../util/router.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import { ProvideAuth } from "./../util/auth.js";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <Navbar
            color="white"
            spaced={true}
            logo="https://balwinder-site.netlify.com/images/logo.png"
          />

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/about" component={AboutPage} />

            <Route exact path="/pricing" component={PricingPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/signin" component={SigninPage} />

            <Route exact path="/signup" component={SignupPage} />

            <Route exact path="/forgotpass" component={ForgotpassPage} />

            <Route exact path="/changepass" component={ChangepassPage} />

            <Route exact path="/Support" component={SupportPage} />

            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>

          <Footer
            color="white"
            size="medium"
            logo="https://balwinder-site.netlify.com/images/logo.png"
            description="A short description of what you do here"
            copyright="© 2019 Company"
          />
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
