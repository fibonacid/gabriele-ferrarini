import { Component, createResource, For } from "solid-js";
import styles from "./Gallery.module.css";

type Image = {
  src: string;
  width: number;
  height: number;
};

type Data = {
  images: Image[];
};

const fetchData = () => {
  const images: Image[] = [
    { src: "https://dummyimage.com/600x400/000/fff", width: 600, height: 400 },
    { src: "https://dummyimage.com/300x400/000/fff", width: 300, height: 400 },
    { src: "https://dummyimage.com/400x300/000/fff", width: 400, height: 300 },
    { src: "https://dummyimage.com/500x500/000/fff", width: 500, height: 500 },
    { src: "https://dummyimage.com/300x600/000/fff", width: 300, height: 600 },
    { src: "https://dummyimage.com/700x500/000/fff", width: 700, height: 500 },
  ];
  return new Promise<Data>((resolve) => {
    setTimeout(() => resolve({ images }), 1000);
  });
};

const GalleryItem: Component<Image> = (props) => {
  const { width, height, src } = props;
  const aspectRatio = width / height;
  return (
    <div class={styles.wrapper} style={`aspect-ratio: ${aspectRatio};`}>
      <img class={styles.image} src={src} alt="" loading="lazy" />
    </div>
  );
};

const Gallery: Component = () => {
  const [data] = createResource(fetchData);

  return (
    <div class={styles.container}>
      <For each={data()?.images}>{GalleryItem}</For>
    </div>
  );
};

export default Gallery;
