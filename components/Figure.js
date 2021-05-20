const Figure = ({ src, alt }) => (
  <figure>
    <img className="w-full" src={src} alt={alt} />
    <figcaption className="text-base text-gray-400 text-center">
      {alt}
    </figcaption>
  </figure>
);

export default Figure;
