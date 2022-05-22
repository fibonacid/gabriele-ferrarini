import { Component, createMemo, JSX, Suspense } from "solid-js";
import styles from "./Layout.module.css";
import LayoutScheleton from "./LayoutScheleton";
import Navigation from "./Navigation";

type Props = {
  children: JSX.Element;
};

const Layout: Component<Props> = ({ children }) => {
  const year = createMemo(() => new Date().getFullYear());

  return (
    <Suspense fallback={<LayoutScheleton />}>
      <div class={styles.container}>
        <header class={styles.header}>Gabriele Ferrarini</header>
        <div class={styles.sidebar}>
          <Navigation />
        </div>
        <main class={styles.content}>
          {children}
          <footer class={styles.footer}>gabriele ferrarini @{year()}</footer>
        </main>
      </div>
    </Suspense>
  );
};

export default Layout;
