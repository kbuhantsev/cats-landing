const navigation = [
  { name: "Головна", href: "#" },
  { name: "Опис", href: "#" },
  { name: "Особливості", href: "#" },
  { name: "Відео огляд", href: "#" },
  { name: "Замовити", href: "#" },
];

const Header = () => {
  return (
    <header className="body-font text-gray-600">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-accentPink mr-5 hover:cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
