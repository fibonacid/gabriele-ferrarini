import gsap from "gsap";
import { Component, createResource, For, onMount } from "solid-js";
import { NavLink } from "solid-app-router";
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
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/contacts", title: "Contacts" },
  ];
  return new Promise<Data>((resolve) =>
    setTimeout(() => resolve({ links }), 1000)
  );
};

const [data] = createResource(fetchData);

const Navigation: Component = () => {
  let container: HTMLElement | undefined;

  onMount(() => {
    if (container) {
      gsap.from(container.children, {
        stagger: 0.05,
        duration: 0.3,
        opacity: 0,
        ease: "power2.out",
      });
    }
  });

  return (
    <nav ref={container} class={styles.container}>
      <For each={data()?.links || []}>
        {(item) => (
          <NavLink href={item.href} class={styles.link} end>
            {item.title}
          </NavLink>
        )}
      </For>
    </nav>
  );
};

export default Navigation;
