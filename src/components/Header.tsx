import type { Component } from "solid-js";
import { HeaderNav, HeaderNavProps } from "./HeaderNav";
import { setMenuOpen, menuOpen } from "./signals";

export type HeaderProps = {
  label: string;
  items: HeaderNavProps["items"];
};

const Header: Component<HeaderProps> = (props) => {
  return (
    <>
      <header class="fixed left-0 right-0 top-0 h-header z-20 flex items-center bg-white text-3xl justify-between border-b-2 border-black">
        <h1 class="px-3">{props.label}</h1>
        <div
          class="px-3"
          role="button"
          onClick={() => setMenuOpen(!menuOpen())}
        >
          {menuOpen() ? "-" : "+"}
        </div>
      </header>
      <HeaderNav items={props.items} />
    </>
  );
};

export default Header;
