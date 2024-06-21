import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="relative group pt-1 pb-2 grid sm:grid-cols-8 sm:gap-8 md:gap-4 transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className='absolute -inset-x-5 -inset-y-4 z-0 pl-5 pr-6 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-5 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
      {children}
    </div>
  );
};

export default Card;