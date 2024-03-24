const Hero = () => {
  return (
    <section className="relative">
      {/* <img src="public/images/hero/hero_width.jpg" alt="sdcasd" /> */}
      {/* <img
        srcSet="public/images/hero/hero_mobile.jpg 640w, public/images/hero/hero_width.jpg 1536w"
        sizes="(max-width: 640px) 640px, 1536px"
        src="public/images/hero/hero_width.jpg"
        alt="Інтерактивна кішка"
      /> */}

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
