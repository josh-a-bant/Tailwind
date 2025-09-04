import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/" },
    { name: "Projects", href: "/" },
    { name: "Contact", href: "/" },
  ];

  return (
    <div className="relative">
      <div className="bg-white max-w-4xl mx-auto px-2 py-2 sm:rounded-full flex justify-between items-center">
        <img
          src="https://ui.aceternity.com/logo.png"
          alt="logo"
          className="sm:rounded-full h-8 w-8"
        />

        <div className="hidden sm:flex text-lg text-neutral-500 gap-4 mr-5">
          {links.map((link) => (
            <a
              href={link.href}
              key={link.name}
              className="hover:text-neutral-900 hover:scale-110 transform transition duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="sm:hidden cursor-pointer"
        >
          <RxHamburgerMenu className=" text-3xl mr-4" />
        </button>

        {open && (
          <div className="sm:hidden max-w-[95%] absolute inset-x-0 top-13 flex flex-col items-end gap-3 p-2 bg-white text-neutral-500 text-lg mx-auto">
            {links.map((link) => (
              <a
                href={link.href}
                key={link.name}
                className="hover:text-neutral-900 hover:scale-110 transform transition duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
