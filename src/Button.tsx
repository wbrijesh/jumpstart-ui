import React from 'react';

interface ButtonProps {
  primary?: boolean;
  secondary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  secondary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) => {
  const classesArray: string[] = ["font-medium", "border", "border-gray-400", "focus:outline-none", " focus:ring-[3px]", "focus:ring-blue-300",]; // prettier-ignore

  const addClass = (className: string) => classesArray.push(className);

  primary && addClass("bg-blue-400 text-white border-transparent hover:bg-blue-500"); // prettier-ignore
  secondary && addClass("bg-gray-75 border-gray-400 text-gray-700 hover:bg-gray-100 hover:text-gray-900"); // prettier-ignore
  size === 'small' && addClass('text-xs px-2 py-1 rounded');
  size === 'medium' && addClass('text-sm px-2 py-1.5 rounded-md');
  size === 'large' && addClass('text-base px-3 py-1.5 rounded-lg');

  const className: string = classesArray.join(' ');

  return (
    <button type="button" className={className} {...props}>
      {label}
    </button>
  );
};
