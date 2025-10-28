import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export function Input(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="block text-sm font-medium text-gray-700 mb-1 capitalize"
      >
        {props.id}
      </label>

      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md placeholder:text-black/40 text-black"
        required
        {...props}
      />
    </div>
  );
}
