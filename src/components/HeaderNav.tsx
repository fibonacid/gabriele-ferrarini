import { Component, For } from "solid-js";
import { menuOpen } from "./signals";
import { classes } from "./utils";

export type HeaderNavItem = {
  label: string;
  href: string;
};

export type HeaderNavProps = {
  items: HeaderNavItem[];
};

export const HeaderNav: Component<HeaderNavProps> = (props) => {
  return (
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
  );
};
