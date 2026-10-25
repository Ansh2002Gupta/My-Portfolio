import site, { mailto } from '../../data/site';
import { Container, TextLink } from '../ui/primitives';

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[0.9375rem] font-medium">{site.name}</p>
          <p className="mt-0.5 text-[0.875rem] text-muted">
            {site.title} · {site.location}
          </p>
        </div>

        <nav aria-label="Elsewhere">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {site.socials.map((social) => (
              <li key={social.id}>
                <TextLink href={social.href} className="text-[0.875rem]">
                  {social.label}
                </TextLink>
              </li>
            ))}
            <li>
              <TextLink href={mailto()} className="text-[0.875rem]">
                Email
              </TextLink>
            </li>
          </ul>
        </nav>
      </Container>

      <Container className="mt-8 border-t border-line pt-6">
        <p className="text-[0.8125rem] text-subtle">
          © {year} {site.name}. Built with React, Vite and Tailwind CSS.{' '}
          <TextLink
            href="https://github.com/Ansh2002Gupta/My-Portfolio"
            className="text-[0.8125rem]"
          >
            Source
          </TextLink>
        </p>
      </Container>
    </footer>
  );
}
