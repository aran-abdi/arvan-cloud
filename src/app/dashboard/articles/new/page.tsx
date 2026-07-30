import { redirect } from "next/navigation";
import { ARTICLES_CREATE_PATH } from "@/features/articles/lib/paths";

export default function NewArticleRedirectPage() {
  redirect(ARTICLES_CREATE_PATH);
}
