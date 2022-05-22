import { Link } from "solid-app-router";
import { Component, createMemo, createSignal, JSX, Suspense } from "solid-js";
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

const hamburgerIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="1em"
    height="1em"
  >
    <path
      fill="currentColor"
      d="M.086 9.773h31.828V7.466H.086v2.307ZM.086 24.534h31.828v-2.307H.086v2.307ZM.086 17.153h31.828v-2.306H.086v2.306Z"
    />
  </svg>
);

const Layout: Component<Props> = ({ children }) => {
  const year = createMemo(() => new Date().getFullYear());
  const [open, setOpen] = createSignal(false);

  return (
    <Suspense fallback={<Scheleton />}>
      <div class={`${styles.container} ${open() ? styles.open : ""}`}>
        <header class={styles.header}>
          <Link href="/">Gabriele Ferrarini</Link>
          <div
            class={styles.button}
            onclick={() => setOpen(!open())}
            role="button"
          >
            {hamburgerIcon}
          </div>
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
