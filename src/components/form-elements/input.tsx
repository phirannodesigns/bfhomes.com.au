import * as React from 'react';
import { ErrorOption } from 'react-hook-form';

import { Error } from './error';

interface IInput {
  className: string;
  errors: ErrorOption;
  label: string;
  name: string;
  placeholder?: string;
  register: any;
  required?: boolean;
  type?: string;
}

function Input({
  className,
  errors,
  label,
  name,
  placeholder,
  register,
  required = true,
  type = 'text',
}: IInput) {
  const MIN_LENGTH = type === 'tel' ? 8 : 2;
  return (
    <div>
      <label htmlFor={name}>
        <span className="sr-only">
          {label}
          {required && ' *'}
        </span>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder || label}
          required={required}
          aria-invalid={!!errors?.[name]}
          ref={register({
            required: required && (
              <Error message={`${label} is a required field`} />
            ),
            minLength: {
              value: MIN_LENGTH,
              message: (
                <Error
                  message={`${label} must be at least ${MIN_LENGTH} characters`}
                />
              ),
            },
          })}
          className={className}
        />
      </label>
      {errors[name]?.message}
    </div>
  );
}

export { Input };
