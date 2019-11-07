import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Layout from "./pages/layout/Layout";
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";
import LandingPage from "./pages/landingpage/LandingPage";
import HomePage from "./pages/home/HomePage";
import Product from "./pages/product/Product";
import SignIn from "./pages/sign-in/SignIn";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Layout>
      <Router>
        <Row>
        <NavBar></NavBar>
          <Col xs={12} md={4}>
            <SideBar className="sidebar"></SideBar>
          </Col>
          {/* <Col xs={12} md={8}> */}
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Col xs={12} md={8}>
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/product" component={Product} />
              <Route exact path="/signin" component={SignIn} />
            </Col>
          </Switch>
          {/* </Col> */}
          <Footer></Footer>
        </Row>
      </Router>
    </Layout>
  );
}

export default App;
