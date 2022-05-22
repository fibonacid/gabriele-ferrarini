import { Route, Routes } from "solid-app-router";
import { Component, lazy } from "solid-js";
import Layout from "./Layout";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Contacts = lazy(() => import("./Contacts"));

const App: Component = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Layout>
  );
};

export default App;
