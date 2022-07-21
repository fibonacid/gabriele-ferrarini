import { Link, useLocation } from "solid-app-router";
import {
  Component,
  createEffect,
  createMemo,
  createSignal,
  JSX,
  Suspense,
} from "solid-js";
import styles from "./Layout.module.css";
import Navigation from "./Navigation";
import { getRandomColor } from "./utils/getRandomColor";

type Props = {
  children: JSX.Element;
};

const Filler: Component = () => {
  const bgColor = getRandomColor();
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

const plusIcon = (
  <svg height="1em" width="1em" viewBox="0 0 10 10">
    <line x1="0" y1="5" x2="10" y2="5" style="stroke:currentColor;stroke-width:0.6" />
    <line x1="5" y1="0" x2="5" y2="10" style="stroke:currentColor;stroke-width:0.6" />
  </svg>
);

const minusIcon = (
  <svg height="1em" width="1em" viewBox="0 0 10 10">
    <line x1="0" y1="5" x2="10" y2="5" style="stroke:currentColor;stroke-width:0.6" />
  </svg>
);

const Layout: Component<Props> = ({ children }) => {
  const year = createMemo(() => new Date().getFullYear());
  const [open, setOpen] = createSignal(false);

  const location = useLocation();

  createEffect<string>((prev) => {
    if (prev !== location.pathname) {
      setOpen(false);
    }
    return location.pathname;
  });

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
            {open() ? minusIcon : plusIcon}
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
