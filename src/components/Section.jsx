import SectionTitle from "./SectionTitle";

const Section = ({ id, title, children }) => {
  return (
    <section id={id} className="my-4 flex flex-col justify-center">
      <SectionTitle title={title} />
      {children}
    </section>
  );
};

export default Section;
