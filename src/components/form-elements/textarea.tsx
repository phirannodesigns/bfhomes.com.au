/* eslint-disable react/require-default-props */
import * as React from 'react';
import { ErrorOption } from 'react-hook-form';

import { Error } from './error';

interface ITextarea {
  className: string;
  errors: ErrorOption;
  label: string;
  name: string;
  placeholder?: string;
  register: any;
  required?: boolean;
  rows?: number;
}

function Textarea({
  className,
  errors,
  label,
  name,
  placeholder,
  register,
  required = true,
  rows = 6,
}: ITextarea) {
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
