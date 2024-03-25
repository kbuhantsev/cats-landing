import Section from "./Section";
import { useFormik } from "formik";
import * as Yup from "yup";

const Order = () => {
  const formik = useFormik({
    initialValues: {
      color: "",
      name: "",
      phone: "",
      comment: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },

    validationSchema: Yup.object({
      color: Yup.string().oneOf[("white", "red")],
      name: Yup.string()
        .min(2, "Заповніть ваше ім'я")
        .required("Це обов'язкове поле"),
      phone: Yup.string()
        .matches(
          /^[+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/,
          "Будь ласка, введіть номер формату: +380XXXXXXXXX",
        )
        .required("Це обов'язкове поле"),
    }),
  });

  let { color, name, phone, comment } = formik.values;
  const {
    color: colorError,
    name: nameError,
    phone: phoneError,
  } = formik.errors;

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (nameError || colorError || phoneError) {
      alert("Перевірте ще раз поля замовлення");
      return;
    }
    console.log(color);
    console.log(name);
    console.log(phone);
    console.log(comment);

    formik.resetForm();
  };

  return (
    <Section id="order" title="Замовлення">
      <div className="flex px-5">
        <form
          onSubmit={onFormSubmit}
          className="relative z-10 mt-2 flex w-full flex-col rounded-lg bg-white p-6 shadow-md md:ml-auto md:mt-0 md:w-1/2 lg:w-1/3"
        >
          <p className="mb-2 text-lg font-medium leading-relaxed ">
            Для замовлення або запитань, залиште свої контакти і ми
            обов&apos;язково з Вами зв&apos;яжемося
          </p>

          <div className="relative mb-4">
            <label htmlFor="color" className="text-sm leading-7 text-gray-600">
              Колір кішки
            </label>
            <select
              id="color"
              name="color"
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 outline-none transition-colors duration-200 ease-in-out focus:border-accentPink focus:ring-2 focus:ring-accentPink"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={color}
            >
              <option value="white">Білий</option>
              <option value="red">Рудий</option>
            </select>
            <p className="text-sm text-accentPink">
              {formik.touched.color && colorError}
            </p>
          </div>

          <div className="relative mb-4">
            <label htmlFor="name" className="text-sm leading-7 text-gray-600">
              Ім&apos;я
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 outline-none transition-colors duration-200 ease-in-out focus:border-accentPink focus:ring-2 focus:ring-accentPink"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={name}
            />
            <p className="text-sm text-accentPink">
              {formik.touched.name && nameError}
            </p>
          </div>

          <div className="relative mb-4">
            <label htmlFor="phone" className="text-sm leading-7 text-gray-600">
              Телефон
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 outline-none transition-colors duration-200 ease-in-out focus:border-accentPink focus:ring-2 focus:ring-accentPink"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={phone}
            />
            <p className="text-sm text-accentPink">
              {formik.touched.phone && phoneError}
            </p>
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="comment"
              className="text-sm leading-7 text-gray-600"
            >
              Ваш коментар
            </label>
            <textarea
              id="comment"
              name="comment"
              className="h-16 w-full resize-none rounded border border-gray-300 bg-white px-3 py-1 text-base leading-6 outline-none transition-colors duration-200 ease-in-out focus:border-accentPink focus:ring-2 focus:ring-accentPink"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={comment}
            ></textarea>
          </div>

          <button className="rounded border-0 bg-accentPink px-6 py-2 text-lg text-white hover:bg-accentRed focus:outline-none">
            Замовити
          </button>

          <p className="mt-3 text-xs text-gray-500">
            Замовленния обробляються в робочи часи
          </p>
        </form>
      </div>
    </Section>
  );
};

export default Order;
