export default function myImageLoader({ src, width, quality }) {
  return `https://cdn.mediavalet.com/${src}?w=${width}&q=${quality || 75}`
},