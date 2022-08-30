export const imageProjection = /* groq */ `{
    "type": "Image",
    "src": url,
    "alt": alt,
    ...metadata.dimensions{ 
        width, 
        height, 
        aspectRatio
    },
}`;

export const galleryProjection = /* groq */ `{
    "type": "Gallery",
    "title": "Favorites",
    "items": images[]${imageProjection}
}`;
