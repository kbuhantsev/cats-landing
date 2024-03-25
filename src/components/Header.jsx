import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Головна", id: "header" },
  { name: "Опис", id: "description" },
  { name: "Особливості", id: "particular" },
  { name: "Відео огляд", id: "video" },
  { name: "Замовити", id: "order" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClickScroll = (id) => {
    console.log(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header name="header" className="body-font text-textColor">
      <div className="container mx-auto flex flex-col flex-wrap items-center justify-center p-5">
        <div className="mr-auto flex h-8 w-8 sm:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center  justify-center rounded-md p-2.5 text-textColor"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
        <nav className="hidden flex-wrap items-center justify-center text-xl font-semibold sm:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href="#"
              className="mr-5 hover:cursor-pointer hover:text-accentPink"
              onClick={() => handleClickScroll(item.id)}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href="#"
                      className="mx-3 block rounded-lg px-4 py-6 text-3xl font-semibold leading-7 text-gray-900 hover:text-accentPink"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        handleClickScroll(item.id);
                      }}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;
