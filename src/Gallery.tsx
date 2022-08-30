import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Component, createEffect, createResource, For } from "solid-js";
import { App } from "../app";
import styles from "./Gallery.module.css";
import { getRandomColor } from "./utils/getRandomColor";

gsap.registerPlugin(ScrollTrigger);

type Data = Pick<App.Gallery, "items">;

const fetchData = () => {
  const images: App.Image[] = [
    {
      src: "/photos/image-00001.jpg",
      alt: "",
      type: "Image",
      width: 800,
      height: 1067,
    },
    {
      src: "/photos/image-00002.jpg",
      alt: "",
      type: "Image",
      width: 800,
      height: 599,
    },
    {
      src: "/photos/image-00003.jpg",
      alt: "",
      type: "Image",
      width: 800,
      height: 599,
    },
    {
      src: "/photos/image-00004.jpg",
      alt: "",
      type: "Image",
      width: 800,
      height: 599,
    },
    {
      src: "/photos/image-00005.jpg",
      alt: "",
      type: "Image",
      width: 800,
      height: 599,
    },
    {
      src: "/photos/image-00006.jpg",
      alt: "",
      type: "Image",
      width: 500,
      height: 1067,
    },
    {
      src: "/photos/image-00007.jpg",
      alt: "",
      type: "Image",
      width: 800,
      height: 1067,
    },
    {
      src: "/photos/image-00008.jpg",
      alt: "",
      type: "Image",
      width: 800,
      height: 1067,
    },
    {
      src: "/photos/image-00009.jpg",
      alt: "",
      type: "Image",
      width: 800,
      height: 1067,
    },
    {
      src: "/photos/image-00010.jpg",
      alt: "",
      type: "Image",
      width: 800,
      height: 1067,
    },
    {
      src: "/photos/image-00011.jpg",
      alt: "",
      type: "Image",
      width: 800,
      height: 1067,
    },
    {
      src: "/photos/image-00012.jpg",
      alt: "",
      type: "Image",
      width: 500,
      height: 1067,
    },
    {
      src: "/photos/image-00012.jpg",
      alt: "",
      type: "Image",
      width: 800,
      height: 1067,
    },
    {
      src: "/photos/image-00014.jpg",
      alt: "",
      type: "Image",
      width: 800,
      height: 1067,
    },
    {
      src: "/photos/image-00015.jpg",
      alt: "",
      type: "Image",
      width: 800,
      height: 1067,
    },
    {
      src: "/photos/image-00016.jpg",
      alt: "",
      type: "Image",
      width: 800,
      height: 1067,
    },
    {
      src: "/photos/image-00017.jpg",
      alt: "",
      type: "Image",
      width: 800,
      height: 1067,
    },
    {
      src: "/photos/image-00018.jpg",
      alt: "",
      type: "Image",
      width: 500,
      height: 1067,
    },
    {
      src: "/photos/image-00019.jpg",
      alt: "",
      type: "Image",
      width: 800,
      height: 1067,
    },
    {
      src: "/photos/image-00020.jpg",
      alt: "",
      type: "Image",
      width: 800,
      height: 1067,
    },
    {
      src: "/photos/image-00021.jpg",
      alt: "",
      type: "Image",
      width: 500,
      height: 1067,
    },
    {
      src: "/photos/image-00022.jpg",
      alt: "",
      type: "Image",
      width: 500,
      height: 1067,
    },
    {
      src: "/photos/image-00023.jpg",
      alt: "",
      type: "Image",
      width: 500,
      height: 1067,
    },
    {
      src: "/photos/image-00024.jpg",
      alt: "",
      type: "Image",
      width: 500,
      height: 1067,
    },
  ];
  const items = images.map((img) => ({ ...img, key: img.src }));
  return new Promise<Data>((resolve) => {
    setTimeout(() => resolve({ items }), 1000);
  });
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
