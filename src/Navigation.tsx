import { Component } from "solid-js";
import styles from "./Navigation.module.css";

const Navigation: Component = () => {
  return (
    <nav class={styles.container}>
      <a href="/" class={styles.link} aria-current="page">
        Link 1
      </a>
      <a href="/" class={styles.link}>
        Link 2
      </a>
      <a href="/" class={styles.link}>
        Link 3
      </a>
      <a href="/" class={styles.link}>
        Link 4
      </a>
    </nav>
  );
};

export default Navigation;
