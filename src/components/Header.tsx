import { HeaderNav, HeaderNavProps } from "./HeaderNav";
import { Component, createSignal } from "solid-js";

export type HeaderProps = {
  label: string;
  navItems: HeaderNavProps["items"];
  navIsOpen?: boolean;
};

const Header: Component<HeaderProps> = (props) => {
  const [navIsOpen, setNavIsOpen] = createSignal(props.navIsOpen || false);
  return (
    <>
      <header class="fixed left-0 right-0 top-0 h-header z-20 flex items-center bg-white text-3xl justify-between border-b-2 border-black">
        <h1 class="px-3">{props.label}</h1>
        <div
          class="px-3"
          role="button"
          onClick={() => setNavIsOpen(!navIsOpen())}
        >
          {navIsOpen() ? "-" : "+"}
        </div>
      </header>
      <HeaderNav items={props.navItems} isOpen={navIsOpen()} />
    </>
  );
};

export default Header;
