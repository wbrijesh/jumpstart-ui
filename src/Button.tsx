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
  const classesArray: string[] = ['font-medium', 'border', 'border-gray-400'];
  function addClass(className: string) {
    classesArray.push(className);
  }

  primary && addClass('bg-blue-400 text-white');
  secondary && addClass("bg-gray-75 border-gray-400 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"); // prettier-ignore
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
