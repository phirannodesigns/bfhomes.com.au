import * as React from 'react';

import { Error } from './error';

function Textarea({
  className,
  errors,
  label,
  name,
  placeholder,
  register,
  required = true,
  rows = 6,
}) {
  return (
    <div>
      <label htmlFor={name}>
        <span className="sr-only">
          {label}
          {required && ' *'}
        </span>
        <textarea
          aria-invalid={!!errors?.[name]}
          name={name}
          id={name}
          placeholder={placeholder || label}
          required={required}
          rows={rows}
          ref={register({
            required: <Error message={`${label} is a required field`} />,
          })}
          className={className}
        />
      </label>
      {errors[name]?.message}
    </div>
  );
}

export { Textarea };
