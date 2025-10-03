export default function Subnav() {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#benefits", label: "Benefits" },
    { href: "#comparison", label: "Audit vs. Analytics" },
    { href: "#case-studies", label: "Case Studies" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <div className="sticky top-16 z-30 border-b border-neutral-200/70 bg-white/70 backdrop-blur dark:border-neutral-800/70 dark:bg-black/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex gap-4 overflow-x-auto py-3">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="whitespace-nowrap rounded-full border border-neutral-300/70 px-4 py-2 text-sm text-neutral-700 hover:bg-white dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-900"
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}


