import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/components";
import { yekanBakh } from "@/styles/fonts";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arvan",
  description:
    "Arvan dashboard and shared UI — manage articles and explore the component library.",
  // Explicit public URLs (versioned) — Safari ignores hard refresh for /favicon.ico
  // and often skips Next's hashed app/icon links.
  icons: {
    icon: [
      { url: "/favicon-arvan.ico", sizes: "48x48" },
      { url: "/arvan-icon.png", type: "image/png", sizes: "32x32" },
      { url: "/arvan-icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon-arvan.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${yekanBakh.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {/* Drop stale localhost service workers that cause Firefox reload loops. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `if("serviceWorker"in navigator){navigator.serviceWorker.getRegistrations().then(function(r){r.forEach(function(x){x.unregister()})});if(navigator.serviceWorker.getRegistrations&&caches){caches.keys().then(function(k){k.forEach(function(n){caches.delete(n)})})}}`,
          }}
        />
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
