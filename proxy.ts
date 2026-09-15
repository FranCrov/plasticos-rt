import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["en", "es"] as const;
const defaultLocale = "en";

type Locale = (typeof locales)[number];

function getLocale(request: NextRequest): Locale {
  const cookie = request.cookies.get("locale")?.value;
  if (cookie === "en" || cookie === "es") return cookie;

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const hasEs = /\bes\b/i.test(acceptLanguage);
  const hasEn = /\ben\b/i.test(acceptLanguage);
  if (hasEs && !hasEn) return "es";

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) return NextResponse.next();

  const locale = getLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};