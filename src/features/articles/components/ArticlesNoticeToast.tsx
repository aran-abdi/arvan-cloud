"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useToast } from "@/components";
import {
  getArticlesPath,
  type ArticlesNotice,
} from "../lib/paths";
import type { ArticlesMessages } from "../types";

export type ArticlesNoticeToastProps = {
  notice: ArticlesNotice;
  messages: ArticlesMessages;
};

export function ArticlesNoticeToast({
  notice,
  messages,
}: ArticlesNoticeToastProps) {
  const { showToast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (notice === "created") {
      showToast({
        type: "Success",
        title: messages.create.success.title,
        description: messages.create.success.description,
      });
    } else {
      showToast({
        type: "Success",
        title: messages.edit.success.title,
        description: messages.edit.success.description,
      });
    }

    router.replace(getArticlesPath(1));
  }, [messages, notice, router, showToast]);

  return null;
}
