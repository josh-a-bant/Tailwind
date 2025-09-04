import { Children } from "react";

const DarkTheme = () => {
  const handleThemeChange = () => {
    const currentTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", currentTheme);
  };

  return (
    <div className=" flex justify-center items-center h-screen bg-neutral-100 ">
      <div className="bg-background dark:bg-foreground text-foreground dark:text-background max-w-80   p-8 rounded-2xl border border-neutral-900 dark:border-neutral-100 flex flex-col overflow-hidden">
        <h1 className="text-3xl font-bold animate-me">Hello Jaan</h1>
        <p className="mt-4 text-lg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
          eligendi delectus labore velit quo deleniti vel, dolore accusantium
          earum fuga dicta necessitatibus corrupti soluta nobis ipsum
          perferendis quae tempore fugit?
        </p>
        <button
          onClick={handleThemeChange}
          className="mt-3 border-2 border-sky-200 dark:border-sky-900 px-3 py-1.5 rounded-full cursor-pointer text-xl"
        >
          Switch Theme
        </button>
      </div>
    </div>
  );
};

export default DarkTheme;



const cardTitle = ({children, className}) => {
  return <div className={cn}></div>
}