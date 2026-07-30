import { notFound } from "next/navigation";
import { SectionHeader } from "@/components";
import styles from "@/docs/docs.module.css";
import { TokenTable } from "@/docs/tokens/TokenTable";
import {
  TOKEN_NAV,
  getTokenCategory,
  isTokenSlug,
} from "@/docs/tokens/registry";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return TOKEN_NAV.map((item) => ({ slug: item.slug }));
}

export default async function DocsTokenPage({ params }: PageProps) {
  const { slug } = await params;

  if (!isTokenSlug(slug)) notFound();

  const category = getTokenCategory(slug);
  if (!category) notFound();

  return (
    <>
      <SectionHeader
        className={styles.fullWidth}
        title={category.title}
        description={category.description}
      />
      <h2 className={styles.heading}>Tokens</h2>
      <TokenTable tokens={category.tokens} />
    </>
  );
}
