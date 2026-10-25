import { useId, useRef, useState } from 'react';

import site, { mailto } from '../../data/site';
import { contact } from '../../data/content';
import { cx } from '../../lib/cx';
import { ButtonLink, Section, SocialIcon, TextLink } from '../ui/primitives';

const IDLE = 'idle';
const SENDING = 'sending';
const SENT = 'sent';
const FAILED = 'failed';

/**
 * Contact section.
 *
 * Email is the primary, always-working action — it needs no third party and
 * cannot break. The form is a convenience on top of it, wired to the same
 * EmailJS service/template/public-key that the previous site used (identifiers
 * unchanged). EmailJS public keys are designed to be client-side and are
 * scoped by the allowed-origin list in the EmailJS dashboard; no private
 * secret is present in this bundle.
 *
 * If the form fails for any reason, the failure message points the visitor at
 * the direct email address rather than leaving them stuck.
 */
export default function Contact() {
  return (
    <Section
      id="contact"
      label="07 — Contact"
      title={contact.heading}
      intro={contact.lead}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
        <div>
          <p className="reveal max-w-[52ch] text-[1.0125rem] leading-[1.7] text-muted">
            {contact.body}
          </p>

          <div className="reveal mt-7 flex flex-wrap gap-3">
            <ButtonLink href={mailto()} tone="primary" external={false}>
              <SocialIcon id="email" />
              {site.email}
            </ButtonLink>
            {site.resumeUrl ? (
              <ButtonLink href={site.resumeUrl} tone="secondary" download external={false}>
                Download résumé
              </ButtonLink>
            ) : null}
          </div>

          {/* A two-column grid keeps labels and values on a shared baseline
              grid instead of letting each row wrap independently. */}
          <dl className="reveal mt-9 grid grid-cols-[5.5rem_minmax(0,1fr)] gap-x-5 gap-y-3.5 border-t border-line pt-6">
            <dt className="pt-1 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">
              Based in
            </dt>
            <dd className="text-[0.9375rem] text-ink">{site.location}</dd>

            {site.showPhonePublicly ? (
              <>
                <dt className="pt-1 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">
                  Phone
                </dt>
                <dd className="text-[0.9375rem]">
                  <TextLink href={`tel:${site.phone.replace(/[^+\d]/g, '')}`}>
                    {site.phone}
                  </TextLink>
                </dd>
              </>
            ) : null}

            <dt className="pt-1 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-subtle">
              Elsewhere
            </dt>
            <dd className="flex flex-wrap gap-x-5 gap-y-1">
              {site.socials.map((social) => (
                <TextLink key={social.id} href={social.href} className="text-[0.9375rem]">
                  {social.label}
                </TextLink>
              ))}
            </dd>
          </dl>
        </div>

        <ContactForm />
      </div>
    </Section>
  );
}

function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(IDLE);
  const [errorDetail, setErrorDetail] = useState(null);
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  const onSubmit = async (event) => {
    event.preventDefault();
    if (status === SENDING) return;

    setStatus(SENDING);
    setErrorDetail(null);

    try {
      // Loaded on demand so the SDK is not part of the initial bundle — the
      // form is below the fold and most visitors never submit it.
      const { default: emailjs } = await import('@emailjs/browser');
      await emailjs.sendForm(
        site.emailjs.serviceId,
        site.emailjs.templateId,
        formRef.current,
        { publicKey: site.emailjs.publicKey },
      );
      setStatus(SENT);
      formRef.current?.reset();
    } catch (error) {
      setStatus(FAILED);
      // Only EmailJS's own message is worth showing ("the service is
      // blocked", a rate-limit notice, and so on). A bare network failure
      // surfaces as "Failed to fetch", which tells a visitor nothing — in
      // that case the fallback email address is the whole answer.
      setErrorDetail(typeof error?.text === 'string' ? error.text : null);
    }
  };

  const disabled = status === SENDING;

  return (
    <div className="reveal rounded-[var(--radius-lg)] border border-line bg-surface p-6 sm:p-7">
      <h3 className="text-[0.9375rem] font-semibold tracking-tight">Send a message</h3>
      <p className="mt-1 text-[0.875rem] text-muted">
        Goes straight to {site.email}.
      </p>

      <form ref={formRef} onSubmit={onSubmit} noValidate={false} className="mt-6 space-y-4">
        <Field id={nameId} name="name" label="Your name" autoComplete="name" required disabled={disabled} />
        <Field
          id={emailId}
          name="email"
          type="email"
          label="Email address"
          autoComplete="email"
          inputMode="email"
          required
          disabled={disabled}
        />
        <Field
          id={messageId}
          name="message"
          label="Message"
          as="textarea"
          rows={5}
          required
          disabled={disabled}
        />

        <button
          type="submit"
          disabled={disabled}
          className={cx(
            'inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[var(--radius-sm)]',
            'bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast',
            'transition-[background-color,opacity] duration-[var(--dur-fast)]',
            'hover:bg-accent/90 disabled:cursor-not-allowed disabled:opacity-60',
          )}
        >
          {status === SENDING ? (
            <>
              <Spinner />
              Sending…
            </>
          ) : (
            'Send message'
          )}
        </button>

        {/*
          Status is announced to assistive technology and conveyed with words
          and an icon — never with colour alone. The region is always present
          so screen readers pick up the change rather than a new node.
        */}
        <div aria-live="polite" aria-atomic="true" className="min-h-[1.25rem]">
          {status === SENT ? (
            <p className="flex items-start gap-2 text-[0.875rem] text-positive">
              <StatusIcon kind="success" />
              <span>Thanks — your message is on its way. I’ll reply to the address you gave.</span>
            </p>
          ) : null}
          {status === FAILED ? (
            <p className="flex items-start gap-2 text-[0.875rem] text-critical">
              <StatusIcon kind="error" />
              <span>
                That didn’t send{errorDetail ? ` (${errorDetail})` : ''}. Please email me
                directly at{' '}
                <a href={mailto()} className="underline underline-offset-2">
                  {site.email}
                </a>
                .
              </span>
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}

function Field({ id, label, as = 'input', disabled, ...rest }) {
  const Tag = as;
  return (
    <div>
      <label htmlFor={id} className="block text-[0.8125rem] font-medium text-muted">
        {label}
        {rest.required ? <span className="sr-only"> (required)</span> : null}
      </label>
      <Tag
        id={id}
        disabled={disabled}
        className={cx(
          'mt-1.5 block w-full rounded-[var(--radius-sm)] border border-line-strong/60 bg-bg',
          'px-3 py-2.5 text-[0.9375rem] text-ink placeholder:text-subtle',
          'transition-colors duration-[var(--dur-fast)]',
          'hover:border-line-strong focus:border-accent disabled:opacity-60',
          as === 'textarea' && 'resize-y min-h-28',
        )}
        {...rest}
      />
    </div>
  );
}

function Spinner() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 16 16"
      className="size-3.5 animate-spin"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="8" cy="8" r="6" className="opacity-30" />
      <path d="M14 8a6 6 0 0 0-6-6" />
    </svg>
  );
}

function StatusIcon({ kind }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 16 16"
      className="mt-[0.2rem] size-3.5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="8" r="6.5" />
      {kind === 'success' ? <path d="m5.2 8.2 2 2 3.6-4" /> : <path d="M8 4.8v4M8 11.1h.01" />}
    </svg>
  );
}
