"use client"

import React from "react";

const Navbar: React.FC<{ activeSection: string }> = ({ activeSection }) => {
  const nav_ind = 'nav-indicator mr-4 h-[1px] w-8 bg-gray-500 transition-all group-hover:w-12 group-hover:bg-slate-100 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none';
  const nav_text = 'nav-text text-sm font-medium uppercase tracking-widest group-hover:text-slate-100 group-focus-visible:text-slate-200';
  const active = 'text-slate-100';

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id)
    element?.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' }
  ]; 
  
  return (
    <div className="nav hidden lg:block">
      <ul className="w-max flex flex-col gap-3">
        {navItems.map((item) => (
            <li key={item.id}>
              <div
                onClick={() => scrolltoHash(item.id)}
                className={`cursor-pointer group flex items-center ${activeSection === item.id ? 'active' : ''}`}
              >
                <span className={`nav-indicator ${activeSection === item.id ? 'bg-slate-100 w-12' : 'bg-navText w-8'} mr-4 h-[1px] transition-all group-hover:w-12 group-hover:bg-slate-100 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}></span>
                <span className={`nav-text ${activeSection === item.id ? 'text-slate-100' : 'text-gray-400'} text-sm font-medium uppercase tracking-widest  group-hover:text-slate-100 group-focus-visible:text-slate-200`}>{item.label}</span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Navbar;