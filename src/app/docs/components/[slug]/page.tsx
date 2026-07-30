import { notFound } from "next/navigation";
import { SectionHeader } from "@/components";
import { DOC_PAGES } from "@/docs/components";
import { DOC_NAV, getDocBySlug, isDocSlug } from "@/docs/registry";
import styles from "@/docs/docs.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return DOC_NAV.map((item) => ({ slug: item.slug }));
}

export default async function DocsComponentPage({ params }: PageProps) {
  const { slug } = await params;

  if (!isDocSlug(slug)) notFound();

  const doc = getDocBySlug(slug);
  if (!doc) notFound();

  const Demo = DOC_PAGES[slug];

  return (
    <>
      <SectionHeader
        className={styles.fullWidth}
        title={doc.title}
        description={doc.description}
      />
      <Demo />
    </>
  );
}
