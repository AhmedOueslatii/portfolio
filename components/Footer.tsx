const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ahmed-oueslati-668501252/" },
  { label: "GitHub", href: "https://github.com/AhmedOueslatii" },
  { label: "Email", href: "mailto:ahmedoueslati2000111@gmail.com" },
];

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-g200 py-10 section-pad sm:flex-row">
      <p className="text-[0.8rem] text-g400">
        © {new Date().getFullYear()} Ahmed Oueslati. All rights reserved.
      </p>
      <div className="flex gap-6">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noreferrer noopener" : undefined}
            className="text-[0.8rem] text-g400 no-underline transition-colors hover:text-ink"
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
