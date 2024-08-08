import React from 'react';

const Button = ({ text, variant = 'normal', icon }) => {
  const baseClasses = 'inline-block px-4 py-2 m-1 rounded-md text-lg font-bold text-center uppercase cursor-pointer outline-none transition duration-300 ease-in-out';
  const variantClasses = variant === 'outline' ? 
    'border border-current text-current bg-transparent hover:bg-current hover:text-white' : 
    'bg-current text-white hover:bg-hvr active:bg-current focus:ring-2 focus:ring-current focus:ring-opacity-50';

  return (
    <button className={`${baseClasses} ${variantClasses}`}>
      {icon && <span className="icon-class">{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
