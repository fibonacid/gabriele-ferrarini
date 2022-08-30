export const imageProjection = /* groq */ `{
    "type": "Image",
    ...asset->{
      "src": url,
      ...metadata {
        "colors": [
            palette.dominant.background
        ],
        ...dimensions {
            width,
            height
        }
      }
    }
}`;

export const galleryProjection = /* groq */ `{
    "type": "Gallery",
    "title": "Favorites",
    "items": images[]{
        "key": asset->._id,
        ...${imageProjection}
    }
}`;
