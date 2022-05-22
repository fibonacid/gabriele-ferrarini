import gsap from "gsap";
import { Component, createEffect, createResource, For } from "solid-js";
import styles from "./Gallery.module.css";

type Image = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

type Data = {
  images: Image[];
};

const fetchData = () => {
  const images: Image[] = [
    { src: "/photos/image-00001.jpg", width: 800, height: 1067 },
    { src: "/photos/image-00002.jpg", width: 800, height: 599 },
    { src: "/photos/image-00003.jpg", width: 800, height: 599 },
    { src: "/photos/image-00004.jpg", width: 800, height: 599 },
    { src: "/photos/image-00005.jpg", width: 800, height: 599 },
    { src: "/photos/image-00006.jpg", width: 500, height: 1067 },
    { src: "/photos/image-00007.jpg", width: 800, height: 1067 },
    { src: "/photos/image-00008.jpg", width: 800, height: 1067 },
    { src: "/photos/image-00009.jpg", width: 800, height: 1067 },
    { src: "/photos/image-00010.jpg", width: 800, height: 1067 },
    { src: "/photos/image-00011.jpg", width: 800, height: 1067 },
    { src: "/photos/image-00012.jpg", width: 500, height: 1067 },
    { src: "/photos/image-00012.jpg", width: 800, height: 1067 },
    { src: "/photos/image-00014.jpg", width: 800, height: 1067 },
    { src: "/photos/image-00015.jpg", width: 800, height: 1067 },
    { src: "/photos/image-00016.jpg", width: 800, height: 1067 },
    { src: "/photos/image-00017.jpg", width: 800, height: 1067 },
    { src: "/photos/image-00018.jpg", width: 500, height: 1067 },
    { src: "/photos/image-00019.jpg", width: 800, height: 1067 },
    { src: "/photos/image-00020.jpg", width: 800, height: 1067 },
    { src: "/photos/image-00021.jpg", width: 500, height: 1067 },
    { src: "/photos/image-00022.jpg", width: 500, height: 1067 },
    { src: "/photos/image-00023.jpg", width: 500, height: 1067 },
    { src: "/photos/image-00024.jpg", width: 500, height: 1067 },
  ];
  return new Promise<Data>((resolve) => {
    setTimeout(() => resolve({ images }), 1000);
  });
};

const GalleryItem: Component<Image> = (props) => {
  const { width, height, src, alt } = props;
  const aspectRatio = width / height;

  return (
    <div class={styles.wrapper} style={`aspect-ratio: ${aspectRatio};`}>
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
      gsap.from(container.children, {
        stagger: 0.05,
        duration: 0.25,
        opacity: 0,
        ease: "power2.out",
      });
      return true;
    }
  });

  return (
    <div ref={container} class={styles.container}>
      <For each={data()?.images}>{GalleryItem}</For>
    </div>
  );
};

export default Gallery;
