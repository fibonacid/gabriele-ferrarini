import { Component, Suspense } from "solid-js";
import Gallery from "./Gallery";
import Introduction from "./Introduction";
import Layout from "./Layout";

const App: Component = () => {
  return (
    <Layout>
      <Introduction />
      <Gallery />
    </Layout>
  );
};

export default App;
