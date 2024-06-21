import React from "react";

const Navbar = () => {
  const nav_ind = 'nav-indicator mr-4 h-[1px] w-8 bg-gray-500 transition-all group-hover:w-12 group-hover:bg-slate-100 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none';
  const nav_text = 'nav-text text-sm font-medium uppercase tracking-widest text-gray-400 group-hover:text-slate-100 group-focus-visible:text-slate-200';
  return (
    <div className="nav hidden lg:block">
      <ul className="w-max flex flex-col gap-3">
        <li>
          <a href="#about" className="cursor-pointer group flex items-center active">
            <span className={nav_ind}></span>
            <span className={nav_text}>About</span>
          </a>
        </li>
        <li>
          <a href="#experience" className="cursor-pointer group flex items-center active">
            <span className={nav_ind}></span>
            <span className={nav_text}>Experience</span>
          </a>
        </li>
        <li>
          <a href="#education" className="cursor-pointer group flex items-center active">
            <span className={nav_ind}></span>
            <span className={nav_text}>Education</span>
          </a>
        </li>
        <li>
          <a href="#projects" className="cursor-pointer group flex items-center active">
            <span className={nav_ind}></span>
            <span className={nav_text}>Projects</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;