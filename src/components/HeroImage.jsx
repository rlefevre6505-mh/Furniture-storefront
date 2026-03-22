export default function HeroImage({ src, className, imageIndex }) {
  return (
    <div className={`${className}-wrapper`}>
      <img src={src} alt="An elegant living space" className={className} />
      <div className={`div${imageIndex}`}></div>
      {imageIndex === 0 && <p className={`p${imageIndex}`}>Home comfort</p>}
      {imageIndex === 1 && (
        <p className={`p${imageIndex}`}>Exquisite elegance</p>
      )}
      {imageIndex === 2 && (
        <p className={`p${imageIndex}`}>Contemporary style</p>
      )}
    </div>
  );
}
