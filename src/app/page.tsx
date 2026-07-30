import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arvan — Dashboard & UI",
  description:
    "Welcome to Arvan — sign in to the dashboard or browse the component docs.",
};

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans">
      <main className="flex flex-col items-center gap-6 px-8 py-24 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--neutral-fg1-default)]">
          Arvan
        </h1>
        <p className="max-w-md text-[var(--neutral-fg2-default)]">
          Manage articles in the dashboard, or open the docs for contributor
          guides and the component library.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            href="/login"
            className="rounded-lg bg-[var(--primary-bg2-default)] px-5 py-3 font-semibold text-white"
          >
            Log in
          </Link>
          <Link
            href="/docs"
            className="rounded-lg border border-[var(--neutral-st2-default)] px-5 py-3 font-semibold text-[var(--neutral-fg1-default)]"
          >
            Open docs
          </Link>
        </div>
      </main>
    </div>
  );
}
