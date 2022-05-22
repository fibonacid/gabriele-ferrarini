import { Component } from "solid-js";
import styles from "./HeaderButton.module.css";

const HeaderButton: Component = () => {
  return (
    <div role="button" class={styles.container}>
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
    </div>
  );
};

export default HeaderButton;
