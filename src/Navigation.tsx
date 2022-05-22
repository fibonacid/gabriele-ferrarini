import { Component, createResource, For } from "solid-js";
import styles from "./Navigation.module.css";

type Link = {
  title: string;
  href: string;
  isExternal?: boolean;
};

type Data = {
  links: Link[];
};

const fetchData = () => {
  const links = [
    { href: "/", title: "Link 1" },
    { href: "/", title: "Link 2" },
    { href: "/", title: "Link 3" },
    { href: "/", title: "Link 4" },
    { href: "/", title: "Link 5" },
  ];
  return new Promise<Data>((resolve) =>
    setTimeout(() => resolve({ links }), 1000)
  );
};

const [data] = createResource(fetchData);

const Navigation: Component = () => {
  return (
    <nav class={styles.container}>
      <For each={data()?.links || []}>
        {(item, index) => (
          <a
            href="/"
            class={styles.link}
            aria-current={index() === 0 && "page"}
          >
            {item.title}
          </a>
        )}
      </For>
    </nav>
  );
};

export default Navigation;
