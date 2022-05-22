import { Component, JSX, Suspense } from "solid-js";
import styles from "./Layout.module.css";
import Navigation from "./Navigation";

type Props = {
  children: JSX.Element;
};

const Layout: Component<Props> = ({ children }) => {
  return (
    <div class={styles.container}>
      <header class={styles.header}>Gabriele Ferrarini</header>
      <div class={styles.sidebar}>
        <Suspense>
          <Navigation />
        </Suspense>
      </div>
      <main class={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;
