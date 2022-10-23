import { Component, createSignal } from "solid-js";

const [menuOpen, setMenuOpen] = createSignal(false);

const Header: Component = () => {
  return (
    <>
      <header class="fixed left-0 right-0 top-0 h-header z-20 flex items-center bg-white text-3xl justify-between">
        <h1 class="px-3">Gabriele Ferrarini</h1>
        <div
          class="px-3"
          role="button"
          onClick={() => setMenuOpen(!menuOpen())}
        >
          {menuOpen() ? "+" : "-"}
        </div>
      </header>
      <div class="fixed z-10 top-header left-0 right-0 bottom-0 transform -translate-y-full"></div>
    </>
  );
};

export default Header;
