import { Component, JSX } from "solid-js";
import styles from "./Layout.module.css";
import Navigation from "./Navigation";

type Props = {
  children: JSX.Element;
};

const Layout: Component<Props> = ({ children }) => {
  return (
    <div class={styles.container}>
      <div class={styles.sidebar}>
        <Navigation />
      </div>
      <main class={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;
