import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Component, createEffect, createResource, For } from "solid-js";
import { App } from "../app";
import styles from "./Gallery.module.css";
import { gallery } from "./lib/sanity/gallery";
import { getRandomColor } from "./utils/getRandomColor";

gsap.registerPlugin(ScrollTrigger);

type Data = Pick<App.Gallery, "items">;

const fetchData = async () => {
  return (await gallery.all())[0];
};

type GalleryItemProps = Data["items"][0];

const GalleryItem: Component<GalleryItemProps> = (props) => {
  const { width = 1, height = 1, src, alt } = props;
  const aspectRatio = width / height;

  const bgColor = getRandomColor();

  return (
    <div
      class={styles.wrapper}
      style={`aspect-ratio: ${aspectRatio}; --bg-color: ${bgColor}`}
    >
      <img
        class={styles.image}
        src={src}
        alt={alt || ""}
        loading="lazy"
        onload={(event) => {
          event.currentTarget.style.opacity = "1.0";
        }}
      />
    </div>
  );
};

const [data] = createResource(fetchData);

const Gallery: Component = () => {
  let container: HTMLDivElement | undefined;

  createEffect((prev) => {
    if (!prev && data() && container) {
      const elements: Element[] = [];
      [...container.children].forEach((child) => {
        elements.push(child.children[0]);
      });

      const fadeIn = (batch: Element[]) => {
        gsap.to(batch, { opacity: 1, stagger: 0.15, duration: 0.2 });
      };
      const fadeOut = (batch: Element[]) => {
        gsap.to(batch, { opacity: 0, stagger: 0.15, duration: 0.2 });
      };

      ScrollTrigger.batch(elements, {
        onEnter: fadeIn,
        onEnterBack: fadeIn,
        onLeave: fadeOut,
        onLeaveBack: fadeOut,
      });
      return true;
    }
  });

  return (
    <div ref={container} class={styles.container}>
      <For each={data()?.items}>{GalleryItem}</For>
    </div>
  );
};

export default Gallery;
