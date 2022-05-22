import { Component, createResource } from "solid-js";
import styles from "./Introduction.module.css";

type Data = {
  title: string;
  description: string;
};

const fetchData = () => {
  return new Promise<Data>((resolve) => {
    setTimeout(
      () =>
        resolve({
          title: "Welcome",
          description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque animi
          cupiditate est quos accusamus omnis. Reprehenderit distinctio commodi
          temporibus sequi molestiae vero natus beatae? Pariatur consequuntur sint
          fugit sit.`,
        }),
      1000
    );
  });
};

const [data] = createResource(fetchData);

const Introduction: Component = () => {
  return (
    <div class={styles.container}>
      <h1 class={styles.title}>{data()?.title}</h1>
      <p class={styles.description}>{data()?.description}</p>
    </div>
  );
};

export default Introduction;
