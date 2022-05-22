import type { Component } from "solid-js";
import Gallery from "./Gallery";
import Layout from "./Layout";

const App: Component = () => {
  return (
    <Layout>
      <h1>Welcome</h1>
      <div>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non sed sequi
        harum tempore rem laboriosam eos dolores maiores culpa reiciendis?
        Similique veritatis quas nihil quod aperiam suscipit consequuntur ipsum
        vero. <a href="mailto:gabrieleferrarini3@gmail.com">MAIL</a>
      </div>
      <Gallery />
    </Layout>
  );
};

export default App;
