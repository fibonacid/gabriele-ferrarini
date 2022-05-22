import { Component } from "solid-js";
import styles from "./LayoutScheleton.module.css";
import Navigation from "./Navigation";

const LayoutScheleton: Component = () => {
  return (
    <div class={styles.container}>
      <div class={styles.header}></div>
      <div class={styles.sidebar}>
        <Navigation />
      </div>
      <div class={styles.content}>
        <div class={styles.footer}></div>
      </div>
    </div>
  );
};

export default LayoutScheleton;
