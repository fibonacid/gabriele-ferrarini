import { Component, For } from "solid-js";
import styles from "./Gallery.module.css";

type Image = {
  src: string;
  width: number;
  height: number;
};

const images: Image[] = [
  { src: "https://dummyimage.com/600x400/000/fff", width: 600, height: 400 },
  { src: "https://dummyimage.com/300x400/000/fff", width: 300, height: 400 },
  { src: "https://dummyimage.com/400x300/000/fff", width: 400, height: 300 },
  { src: "https://dummyimage.com/500x500/000/fff", width: 500, height: 500 },
  { src: "https://dummyimage.com/300x600/000/fff", width: 300, height: 600 },
  { src: "https://dummyimage.com/700x500/000/fff", width: 700, height: 500 },
];

const GalleryItem: Component<Image> = (props) => {
  const { width, height, src } = props;
  const aspectRatio = width / height;
  return (
    <div class={styles.wrapper} style={`aspect-ratio: ${aspectRatio};`}>
      <img class={styles.image} src={src} alt="" />
    </div>
  );
};

const Gallery: Component = () => {
  return (
    <div class={styles.container}>
      <For each={images}>{GalleryItem}</For>
    </div>
  );
};

export default Gallery;
