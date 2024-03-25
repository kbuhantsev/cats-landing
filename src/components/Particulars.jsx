import Section from "./Section";

const Particulars = () => {
  const content = [
    {
      title: "Кошенята",
      text: (
        <>&nbsp;&nbsp;&nbsp;&nbsp;2 кошенят приховані у животику тваринки.</>
      ),
      image: "cats.jpg",
    },
    {
      title: "Пиття молочка",
      text: (
        <>
          &nbsp;&nbsp;&nbsp;&nbsp;Звук пиття молочка при прокладанні пляшечки до
          рота кішки та при прикладанні кошенят до живота Киці
        </>
      ),
      image: "milk.jpg",
    },
    {
      title: "Зона на спинці",
      text: (
        <>
          &nbsp;&nbsp;&nbsp;&nbsp;Сенсорна зона на спинці іграшки, дотик до якої
          активує звуки, мелодії та пісні англійською
        </>
      ),
      image: "neck.jpg",
    },
    {
      title: "Звукові функції",
      text: (
        <>
          &nbsp;&nbsp;&nbsp;&nbsp;Функція запису голосу (натисніть на праву
          лапку один раз для запису, натисніть повторно для відтворення) -
          натискання на ліву лапку активує звук нявкання
        </>
      ),
      image: "sounds.jpg",
    },
  ];

  return (
    <Section id="particular" title="Можливості">
      {content.map(({ title, text, image }) => (
        <div className="px-2 py-3" key={title}>
          <div className="mx-auto flex flex-col items-start sm:flex-row sm:items-center lg:w-2/3">
            <h2 className="ml-2 flex-grow text-3xl font-medium italic sm:pr-16">
              {title}
            </h2>
            <p className="w-full bg-accentPink px-2 py-2 text-xl">{text}</p>
          </div>
          <div>
            <img src={`./images/particulars/${image}`} alt="2 кошенят" />
          </div>
        </div>
      ))}

      <div className="px-2 py-3">
        <div className="mx-auto flex flex-col items-start sm:flex-row sm:items-center lg:w-2/3">
          <h2 className="ml-2 flex-grow text-3xl font-medium italic sm:pr-16">
            Додатково
          </h2>
        </div>
        <div className="bg-accentPink px-2 py-2 text-xl">
          <ul className="list-inside list-image-[url(./images/icons/cat.svg)] ">
            <li className="">Доступні 2 кольори: біла та руда</li>
            <li>Тип живлення - 3 батарейки “АА” (не додаються)</li>
            <li>Розмір кішки - 25 см × 22 см × 18 см</li>
            <li>Розмір упаковки - 36 см × 20 см × 21 см</li>
            <li>У комплекті представлена пляшечка для годування.</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Particulars;
