import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-white font-sans">
      <main className="flex flex-col items-center gap-6 px-8 py-24 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--neutral-fg1-default)]">
          Arvan UI
        </h1>
        <p className="max-w-md text-[var(--neutral-fg2-default)]">
          Shared component library documentation with live interactive demos.
        </p>
        <Link
          href="/docs"
          className="rounded-lg bg-[var(--primary-bg2-default)] px-5 py-3 font-semibold text-white"
        >
          Open component docs
        </Link>
      </main>
    </div>
  );
}
