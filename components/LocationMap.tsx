import { contactInfo, mapsDirectionsUrl, mapsEmbedUrl } from "@/lib/site";

export default function LocationMap({
  lang,
  title,
  directionsLabel,
}: {
  lang: string;
  title: string;
  directionsLabel: string;
}) {
  return (
    <div className="animate-fade-in-up relative h-[24rem] overflow-hidden rounded-2xl border border-neutral-200 bg-white sm:h-[30rem]">
      <iframe
        title={title}
        src={mapsEmbedUrl(lang)}
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />

      <div className="pointer-events-none absolute inset-x-4 bottom-4 sm:left-5 sm:right-auto sm:max-w-xs">
        <div className="pointer-events-auto rounded-2xl border border-neutral-200 bg-white/95 p-4 shadow-lg shadow-neutral-900/10 backdrop-blur">
          <p className="font-display text-sm font-semibold text-neutral-900">
            {contactInfo.address}
          </p>
          <p className="mt-0.5 text-xs text-neutral-500">{contactInfo.city}</p>
          <a
            href={mapsDirectionsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-brand-600/25 transition-opacity hover:opacity-90"
          >
            <svg
              aria-hidden
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5"
            >
              <path
                fillRule="evenodd"
                d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                clipRule="evenodd"
              />
            </svg>
            {directionsLabel}
          </a>
        </div>
      </div>
    </div>
  );
}