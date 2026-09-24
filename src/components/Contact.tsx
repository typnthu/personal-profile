import { useState, type FormEvent } from 'react';
import { profile } from '../data/profile';
import {
  validateContact,
  type ContactForm as FormState,
  type ContactErrors as FormErrors,
} from '../lib/validateContact';

const emptyForm: FormState = { name: '', email: '', message: '' };

export const Contact = () => {
  const [values, setValues] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormState) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(emptyForm);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-5xl px-4 py-16">
      <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Contact</h2>

      <div className="mt-6 grid gap-10 md:grid-cols-2">
        <div>
          <p className="text-slate-600">You can reach me by email or on social media:</p>
          <p className="mt-3">
            <a
              href={`mailto:${profile.email}`}
              className="font-medium text-slate-900 underline underline-offset-4 hover:text-slate-600"
            >
              {profile.email}
            </a>
          </p>
          <ul className="mt-4 flex flex-wrap gap-4">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-700 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={values.name}
              onChange={handleChange('name')}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className="rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            />
            {errors.name && (
              <p id="name-error" className="text-sm text-red-600">
                {errors.name}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={values.email}
              onChange={handleChange('email')}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            />
            {errors.email && (
              <p id="email-error" className="text-sm text-red-600">
                {errors.email}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-sm font-medium text-slate-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={values.message}
              onChange={handleChange('message')}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            />
            {errors.message && (
              <p id="message-error" className="text-sm text-red-600">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="rounded-lg bg-slate-900 px-5 py-2.5 font-medium text-white hover:bg-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
          >
            Send
          </button>

          {submitted && (
            <p role="status" className="text-sm font-medium text-green-700">
              Thank you! Your message has been recorded.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};
