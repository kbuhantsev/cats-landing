const Hero = () => {
  return (
    <section id="hero" className="relative mb-5">
      <picture className="mb-3 flex">
        <source
          media="(max-width: 640px)"
          srcSet="./images/hero/hero_mobile.jpg"
        />
        <source
          media="(min-width: 641px)"
          srcSet="./images/hero/hero_width.jpg"
        />
        <img src="./images/hero/hero_mobile.jpg" alt="Інтерактивна кішка" />
      </picture>

      <h1
        className="absolute left-5 top-4 -rotate-12 font-marckScript text-5xl font-bold text-accentRed
      sm:relative sm:left-auto sm:top-auto sm:flex sm:rotate-0 sm:justify-center"
      >
        Інтерактивна кішка
      </h1>
    </section>
  );
};

export default Hero;
