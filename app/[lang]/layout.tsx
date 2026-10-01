import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { locales } from "@/lib/i18n/config";
import type { LayoutLangProps } from "@/lib/i18n/types";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Analytics } from "@vercel/analytics/react";
import { siteConfig } from "@/lib/site";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: LayoutLangProps): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(lang);
  return {
    title: {
      default: `${siteConfig.name} | ${siteConfig.tagline}`,
      template: `%s | ${siteConfig.name}`,
    },
    description: dict.meta.home.description,
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutLangProps) {
  const { lang } = await params;
  const dict = getDictionary(lang);

  const navItems = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/materials`, label: dict.nav.materials },
    { href: `/${lang}/products`, label: dict.nav.products },
    { href: `/${lang}/information`, label: dict.nav.information },
    { href: `/${lang}/contact`, label: dict.nav.contact },
  ];

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-neutral-50 text-neutral-900">
        <Navbar brand={siteConfig.name} lang={lang} navItems={navItems} />
        <main className="flex-1 pt-16">{children}</main>
        <Footer
          brand={siteConfig.name}
          footer={dict.footer}
          departmentLabels={dict.departments}
          navItems={navItems}
        />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}