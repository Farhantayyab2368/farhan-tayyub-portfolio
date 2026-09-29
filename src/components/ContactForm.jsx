import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CircleAlert, CircleCheck, LoaderCircle, Send } from 'lucide-react';
import { contact, socials } from '../data/portfolio.config';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const empty = { name: '', email: '', subject: '', message: '', company: '' };

function validate(v) {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your name (at least 2 characters).';
  if (!v.email.trim()) e.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email address, e.g. name@example.com.';
  if (v.subject.trim().length < 3) e.subject = 'Please add a short subject (at least 3 characters).';
  if (v.message.trim().length < 10) e.message = 'Please write a message of at least 10 characters.';
  return e;
}

function Field({ id, label, error, as = 'input', value, onChange, onBlur, ...rest }) {
  const C = as;
  return (
    <div className={as === 'textarea' ? 'sm:col-span-2' : ''}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-white/85">
        {label} <span className="text-lime" aria-hidden>*</span>
      </label>
      <C
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        aria-required="true"
        className={`w-full rounded-xl border bg-ink/60 px-4 py-3.5 text-[15px] text-white placeholder:text-soft transition focus:outline-none focus-visible:outline-none ${
          error ? 'border-sev-critical/60 focus:border-sev-critical' : 'border-white/10 focus:border-lime/60 focus:ring-4 focus:ring-lime/10'
        } ${as === 'textarea' ? 'min-h-40 resize-y' : 'min-h-12'}`}
        {...rest}
      />
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 flex items-center gap-1.5 text-xs text-sev-critical"
          >
            <CircleAlert size={13} aria-hidden /> {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [note, setNote] = useState('');

  const onChange = (e) => {
    const next = { ...values, [e.target.name]: e.target.value };
    setValues(next);
    if (touched[e.target.name]) setErrors(validate(next));
    if (status !== 'idle' && status !== 'sending') setStatus('idle');
  };
  const onBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
    setErrors(validate(values));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, email: true, subject: true, message: true });
    if (Object.keys(errs).length) {
      setStatus('error');
      setNote('Please fix the highlighted fields and try again.');
      document.getElementById(Object.keys(errs)[0])?.focus();
      return;
    }
    if (values.company) return; // honeypot: silently ignore bots

    setStatus('sending');
    try {
      if (contact.formEndpoint) {
        const res = await fetch(contact.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: values.name.trim(),
            email: values.email.trim(),
            subject: values.subject.trim(),
            message: values.message.trim(),
          }),
        });
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        setNote('Thank you! Your message has been sent — I’ll get back to you soon.');
      } else {
        const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`;
        window.location.href = `mailto:${socials.email}?subject=${encodeURIComponent(values.subject.trim())}&body=${encodeURIComponent(body)}`;
        setNote('Your email app is opening with the message ready to send. Thank you for reaching out!');
      }
      setStatus('success');
      setValues(empty);
      setTouched({});
      setErrors({});
    } catch {
      setStatus('error');
      setNote(`Something went wrong while sending. Please try again or email me directly at ${socials.email}.`);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate className="glass rounded-3xl p-6 sm:p-8" aria-describedby="form-status">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Name" autoComplete="name" placeholder="Your name" value={values.name} onChange={onChange} onBlur={onBlur} error={errors.name} />
        <Field id="email" label="Email" type="email" autoComplete="email" placeholder="you@example.com" value={values.email} onChange={onChange} onBlur={onBlur} error={errors.email} />
        <div className="sm:col-span-2">
          <Field id="subject" label="Subject" placeholder="Design project, testing request, opportunity…" value={values.subject} onChange={onChange} onBlur={onBlur} error={errors.subject} />
        </div>
        <Field id="message" as="textarea" label="Message" placeholder="Tell me a little about your project or role…" value={values.message} onChange={onChange} onBlur={onBlur} error={errors.message} />
        {/* honeypot */}
        <div className="hidden" aria-hidden>
          <label htmlFor="company">Company</label>
          <input id="company" name="company" tabIndex={-1} autoComplete="off" value={values.company} onChange={onChange} />
        </div>
      </div>

      <div className="mt-6 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div id="form-status" role="status" aria-live="polite" className="min-h-5 text-sm">
          {status === 'success' && (
            <span className="flex items-start gap-2 text-lime">
              <CircleCheck size={16} className="mt-0.5 shrink-0" aria-hidden /> {note}
            </span>
          )}
          {status === 'error' && (
            <span className="flex items-start gap-2 text-sev-critical">
              <CircleAlert size={16} className="mt-0.5 shrink-0" aria-hidden /> {note}
            </span>
          )}
        </div>
        <button type="submit" className="btn btn-primary shrink-0 disabled:opacity-60" disabled={status === 'sending'} data-cursor="SEND">
          {status === 'sending' ? (
            <>
              <LoaderCircle size={16} className="animate-spin" aria-hidden /> Sending…
            </>
          ) : (
            <>
              Send Message <Send size={16} aria-hidden />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
