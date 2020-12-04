import * as React from "react";

interface TextareaProps {
  className?: string;
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
}

/**
 * Reusable HTML input component
 * @param className Forwards to the className prop on the textarea element
 * @param label Label for the textarea
 * @param name Used for both the `id` and `name` of the textarea
 * @param placeholder Placeholder text for the textarea, falls back to label if not provided
 * @param rows Number of rows that the textarea should be
 */

function Textarea({
  className,
  label,
  name,
  placeholder,
  rows = 6,
}: TextareaProps) {
  return (
    <label htmlFor={name}>
      <span className="sr-only">{label}</span>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder || label}
        rows={rows}
        className={className}
      />
    </label>
  );
}

export { Textarea };
