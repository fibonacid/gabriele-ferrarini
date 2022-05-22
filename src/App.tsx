import { Component, createResource, Suspense } from "solid-js";
import Gallery from "./Gallery";
import Introduction from "./Introduction";
import Layout from "./Layout";

const App: Component = () => {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Introduction />
        <Gallery />
      </Suspense>
    </Layout>
  );
};

export default App;
