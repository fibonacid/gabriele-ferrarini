import { Component, createMemo, JSX, Suspense } from "solid-js";
import styles from "./Layout.module.css";
import Navigation from "./Navigation";

type Props = {
  children: JSX.Element;
};

const Layout: Component<Props> = ({ children }) => {
  const year = createMemo(() => new Date().getFullYear());

  return (
    <div class={styles.container}>
      <header class={styles.header}>Gabriele Ferrarini</header>
      <div class={styles.sidebar}>
        <Suspense>
          <Navigation />
        </Suspense>
      </div>
      <main class={styles.content}>
        {children}
        <footer class={styles.footer}>gabriele ferrarini @{year()}</footer>
      </main>
    </div>
  );
};

export default Layout;
