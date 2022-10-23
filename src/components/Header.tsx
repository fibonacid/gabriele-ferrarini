import type { Component } from "solid-js";

const Header: Component = () => {
  return (
    <>
      <header class="fixed  left-0 right-0 top-0 h-header z-20 flex items-center p-3 bg-white">
        <h1 class="text-3xl">Gabriele Ferrarini</h1>
      </header>
      <div class="fixed z-10 top-header left-0 right-0 bottom-0 transform -translate-y-full"></div>
    </>
  );
};

export default Header;
