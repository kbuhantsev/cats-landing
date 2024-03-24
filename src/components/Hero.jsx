const Hero = () => {
  return (
    <section id="hero" className="relative">
      <picture>
        <source
          media="(max-width: 640px)"
          srcSet="/images/hero/hero_mobile.jpg"
        />
        <source
          media="(min-width: 641px)"
          srcSet="/images/hero/hero_width.jpg"
        />
        <img src="/images/hero/hero_mobile.jpg" alt="Інтерактивна кішка" />
      </picture>

      <h1 className="text-3xl font-bold">Інтерактивна кішка</h1>
    </section>
  );
};

export default Hero;
