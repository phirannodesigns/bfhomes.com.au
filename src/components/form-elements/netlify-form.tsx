import * as React from 'react';
import { navigate } from 'gatsby';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

interface NetlifyFormProps {
  action?: string;
  children: React.ReactNode;
  className?: string;
  handleSubmit: any;
  name?: string;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
}

function NetlifyForm({
  action = '/success/',
  children,
  className,
  handleSubmit,
  name = 'contact_form',
  setIsSubmitting,
}: NetlifyFormProps) {
  function onSubmit(data, ev) {
    ev.preventDefault();
    setIsSubmitting(true);
    const form = ev.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...data,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  }
  return (
    <form
      data-netlify
      data-netlify-honeypot="bot-field"
      action={action}
      method="POST"
      name={name}
      onSubmit={handleSubmit(onSubmit)}
      className={className}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      <div hidden>
        <label htmlFor="bot-field">
          Don’t fill this out: <input id="bot-field" name="bot-field" />
        </label>
      </div>
      {children}
    </form>
  );
}

export { NetlifyForm };
