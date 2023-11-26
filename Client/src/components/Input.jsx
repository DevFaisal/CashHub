import React, { useId } from 'react';

const Input = React.forwardRef(function Input({
  type = "text",
  placeholder = "",
  ...props
}, ref) {
  const id = useId();

  return (
    <input
      className={`px-3 py-2 font-semibold rounded-lg bg-white text-black outline-none
      focus:bg-gray-50 duration-200 border border-gray-200 w-full`}
      type={type}
      placeholder={placeholder}
      id={id}
      {...props}
      ref={ref}
    />
  );
});

export default Input;
