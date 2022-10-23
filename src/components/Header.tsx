import { Component, createSignal, For } from "solid-js";
import { classes } from "./utils";

const [menuOpen, setMenuOpen] = createSignal(false);

export type NavItem = {
  label: string;
  href: string;
};

export type HeaderProps = {
  label: string;
  items: NavItem[];
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
          {menuOpen() ? "+" : "-"}
        </div>
      </header>
      <nav
        class={classes(
          "fixed z-10 top-header left-0 right-0 transition-transform ",
          menuOpen() || "transform -translate-y-full"
        )}
      >
        <For each={props.items}>
          {(item) => (
            <a
              class="px-3 h-header flex items-center bg-white text-3xl justify-between border-b-2 border-black"
              href={item.href}
            >
              {item.label}
            </a>
          )}
        </For>
      </nav>
    </>
  );
};

export default Header;
