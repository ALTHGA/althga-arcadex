/* eslint-disable react/display-name */
import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = {
  label?: string;
  helper?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label = "label", type = "text", helper, ...props }, ref) => {
    return (
      <div className="flex flex-col mt-2 gap-1 w-full">
        <label htmlFor={label} className="capitalize text-stone-600 text-sm">
          {label}
        </label>
        <input
          id={label}
          ref={ref}
          type={type}
          data-error={!!helper}
          className="p-2 border border-gray-200 data-[error=true]:focus:ring-4 data-[error=true]:ring-red-100 data-[error=true]:focus:outline-red-500 focus:outline-indigo-500 focus:ring-4 ring-indigo-100 rounded text-sm"
          {...props}
        />
        {helper && <p className="text-sm text-red-500">{helper}</p>}
      </div>
    );
  }
);
