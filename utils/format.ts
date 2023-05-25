export const getImageUrl = (path: string) => {
  if (!path.includes('/assets')) {
    return path;
  }
  
  // handle dynamic assets here
  // https://vitejs.dev/guide/assets.html
  const assetPath = path.replace(/^\/assets\//, '');
  //home/mobile/image-web-design.jpg assets/home/mobile/image-web-design.jpg
  return new URL(`../assets/${assetPath}`, import.meta.url).href;
};