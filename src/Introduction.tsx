import { Component } from "solid-js";
import styles from "./Introduction.module.css";

const Introduction: Component = () => {
  return (
    <div class={styles.container}>
      <h1 class={styles.title}>Welcome</h1>
      <p class={styles.description}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque animi
        cupiditate est quos accusamus omnis. Reprehenderit distinctio commodi
        temporibus sequi molestiae vero natus beatae? Pariatur consequuntur sint
        fugit sit. Assumenda?
      </p>
    </div>
  );
};

export default Introduction;
