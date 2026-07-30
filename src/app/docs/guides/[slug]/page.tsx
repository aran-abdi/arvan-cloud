import { notFound } from "next/navigation";
import { SectionHeader } from "@/components";
import {
  GUIDE_NAV,
  GUIDE_PAGES,
  getGuideBySlug,
  isGuideSlug,
} from "@/docs/guides";
import styles from "@/docs/docs.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return GUIDE_NAV.map((item) => ({ slug: item.slug }));
}

export default async function DocsGuidePage({ params }: PageProps) {
  const { slug } = await params;

  if (!isGuideSlug(slug)) notFound();

  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const Content = GUIDE_PAGES[slug];

  return (
    <>
      <SectionHeader
        className={styles.fullWidth}
        title={guide.title}
        description={guide.description}
      />
      <Content />
    </>
  );
}
