export default function HeroImage({ src, className, children }) {
  return (
    <div className={`${className}-wrapper`}>
      <img src={src} alt="An elegant living space" className={className} />
      {children}
    </div>
  );
}
