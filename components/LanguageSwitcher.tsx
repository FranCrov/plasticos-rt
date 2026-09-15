"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({ lang }: { lang: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const target = lang === "en" ? "es" : "en";

  const handleClick = () => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === lang) {
      const rest = segments.slice(1).join("/");
      router.push(`/${target}${rest ? `/${rest}` : ""}`);
    } else {
      router.push(`/${target}`);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Switch language"
      title="EN / ES"
      className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-200 bg-white px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-neutral-600 transition-colors hover:border-brand-300 hover:text-brand-600"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="h-3.5 w-3.5"
        aria-hidden
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {target}
    </button>
  );
}