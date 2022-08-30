export namespace App {
  /** Utility type */
  export type List<T> = Array<T & { key: string }>;
  /** Image */
  export interface Image {
    type: "Image";
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    aspectRatio?: number;
    colors?: string[];
  }
  export interface Gallery {
    type: "Gallery";
    title: string;
    items: List<Image>;
  }
}
