import type { Metadata } from "next";
import { defaultLocale, getDictionary } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(defaultLocale);

  return {
    title: `Articles · ${dictionary.common.appName}`,
  };
}

export default function ArticlesPage() {
  return <main />;
}
