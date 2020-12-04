import * as React from "react";

interface InputProps {
  className?: string;
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}

/**
 * Reusable HTML input component
 * @param className Forwards to the className prop on the input element
 * @param label Label for the input
 * @param name Used for both the `id` and `name` of the input
 * @param placeholder Placeholder text for the input, falls back to label if not provided
 * @param type Input type. Defaults to 'text'
 */

function Input({
  className,
  label,
  name,
  placeholder,
  type = "text",
}: InputProps) {
  return (
    <label htmlFor={name}>
      <span className="sr-only">{label}</span>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder || label}
        className={className}
      />
    </label>
  );
}

export { Input };
