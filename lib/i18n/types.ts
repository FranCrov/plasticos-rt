export type LangParams = Promise<{ lang: string }>;

export type PageLangProps = { params: LangParams };

export type LayoutLangProps = { children: React.ReactNode; params: LangParams };