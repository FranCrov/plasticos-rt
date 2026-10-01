import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/dictionaries";
import type { NavItem } from "@/lib/site";
import { contactInfo, departments, telHref } from "@/lib/site";

export default function Footer({
  brand,
  footer,
  departmentLabels,
  navItems,
}: {
  brand: string;
  footer: Dictionary["footer"];
  departmentLabels: Dictionary["departments"];
  navItems: NavItem[];
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="h-7 w-1.5 rounded-full bg-gradient-to-b from-brand-300 via-brand-400 to-brand-600"
              />
              <span className="text-base font-bold tracking-tight text-neutral-900">
                {brand}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-500">
              {footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900">
              {footer.sections}
            </h3>
            <nav className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-neutral-500 transition-colors hover:text-brand-600"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-neutral-900">
              {footer.contact}
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-neutral-500">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="transition-colors hover:text-brand-600"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={telHref(contactInfo.phone)}
                  className="transition-colors hover:text-brand-600"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                {contactInfo.address}, {contactInfo.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-8">
          <h3 className="text-sm font-semibold text-neutral-900">
            {footer.departments}
          </h3>
          <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => (
              <div key={department.id}>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
                  {departmentLabels[
                    department.id as keyof typeof departmentLabels
                  ]}
                </h4>
                <ul className="mt-2 space-y-1.5 text-sm text-neutral-500">
                  {department.emails.map((email) => (
                    <li key={email}>
                      <a
                        href={`mailto:${email}`}
                        className="transition-colors hover:text-brand-600"
                      >
                        {email}
                      </a>
                    </li>
                  ))}
                </ul>
                {department.contacts && (
                  <ul className="mt-2 space-y-1 text-xs text-neutral-400">
                    {department.contacts.map((person) => (
                      <li key={person.name}>
                        {person.name} ·{" "}
                        <a
                          href={telHref(person.phone)}
                          className="transition-colors hover:text-brand-600"
                        >
                          {person.phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-200 pt-6 text-center text-sm text-neutral-500">
          © {year} {brand}. {footer.rights}
        </div>
      </div>
    </footer>
  );
}