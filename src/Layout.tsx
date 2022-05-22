import { Link } from "solid-app-router";
import { Component, createMemo, JSX, onMount, Suspense } from "solid-js";
import styles from "./Layout.module.css";
import Navigation from "./Navigation";

type Props = {
  children: JSX.Element;
};

const Filler: Component = () => {
  const bgColor = Math.floor(Math.random() * 16777215).toString(16);
  return <div class={styles.filler} style={`--bg-color: #${bgColor}`}></div>;
};

const Scheleton: Component = () => {
  return (
    <div class={styles.container}>
      <header class={styles.header}>
        <Filler />
      </header>
      <div class={styles.sidebar}>
        <Filler />
      </div>
      <main class={styles.content}>
        <Filler />
        <footer class={styles.footer}>
          <Filler />
        </footer>
      </main>
    </div>
  );
};

const Layout: Component<Props> = ({ children }) => {
  const year = createMemo(() => new Date().getFullYear());

  return (
    <Suspense fallback={<Scheleton />}>
      <div class={styles.container}>
        <header class={styles.header}>
          <Link href="/">Gabriele Ferrarini</Link>
        </header>
        <div class={styles.sidebar}>
          <Navigation />
        </div>
        <main class={styles.content}>
          {children}
          <footer class={styles.footer}>
            &copy; Gabriele Ferrarini {year()}
          </footer>
        </main>
      </div>
    </Suspense>
  );
};

export default Layout;
