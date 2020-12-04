import * as React from "react";
import { useForm } from "react-hook-form";

import { Input, NetlifyForm, Textarea } from "./form-elements";
import config, { socialLinks } from "../data/config";

function ContactSection() {
  const { handleSubmit } = useForm();
  const [isSubmitting, setIsSubmitting] = React.useState();
  return (
    <article>
      <div className="w-full max-w-screen-xl px-4 py-20 mx-auto sm:px-6 lg:px-8">
        <div className="grid items-center gap-x-4 gap-y-12 lg:grid-cols-2">
          <div className="w-full max-w-2xl mx-auto">
            <h2 className="inline-block text-3xl font-bold uppercase border-b-2 border-brand-teal text-brand-teal">
              Contact Us
            </h2>
            <NetlifyForm
              handleSubmit={handleSubmit}
              setIsSubmitting={setIsSubmitting}
              className="grid gap-4 mt-10"
            >
              <Input name="full-name" label="Full Name" className="w-full" />
              <Input
                name="email-address"
                label="Email Address"
                type="email"
                className="w-full"
              />
              <Input
                name="contact-number"
                label="Contact Number"
                type="tel"
                className="w-full"
              />
              <Textarea name="message" label="Message" className="w-full" />
              <div>
                <button
                  type="submit"
                  className="inline-flex items-center py-5 text-lg font-medium leading-none tracking-wider text-white uppercase border border-white px-14 bg-brand-blue"
                >
                  Submit
                </button>
              </div>
            </NetlifyForm>
          </div>
          <div className="mx-auto space-y-8 font-medium">
            <div>
              <h3 className="inline-block text-2xl font-bold uppercase text-brand-blue">
                Contact Details
              </h3>
              <dl className="mt-2 prose-lg">
                <div>
                  <dt className="sr-only">Phone</dt>
                  <dd>
                    <a href={`tel:${config.phone}`}>{config.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">Email</dt>
                  <dd>
                    <a href={`mailto:${config.email}`}>{config.email}</a>
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h3 className="inline-block text-2xl font-bold uppercase text-brand-blue">
                Open Hours
              </h3>
              <div className="mt-2 prose-lg">
                <p>{config.officeHours}</p>
              </div>
            </div>
            <div>
              <h3 className="inline-block text-2xl font-bold uppercase text-brand-blue">
                Find Us At
              </h3>
              <div className="mt-2 prose-lg">
                <p>{config.address}</p>
              </div>
            </div>
            <div>
              <h3 className="inline-block text-2xl font-bold uppercase text-brand-blue">
                Follow Us On
              </h3>
              <ul className="flex items-center mt-2 space-x-3">
                {config.socialLinks.map((socialLink) => (
                  <li key={socialLink.url}>
                    <a
                      href={socialLink.url}
                      className="inline-flex items-center justify-center w-10 h-10 text-white rounded-full bg-brand-blue"
                    >
                      <socialLink.icon className="text-2xl" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export { ContactSection };
