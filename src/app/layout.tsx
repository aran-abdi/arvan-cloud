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
  // Unique /brand/* paths — Safari permanently caches /favicon.ico per host
  // (even private windows) and still shows the old Next.js icon for localhost.
  icons: {
    icon: [
      { url: "/brand/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/brand/icon.ico", type: "image/x-icon", sizes: "any" },
    ],
    shortcut: "/brand/icon.ico",
    apple: "/brand/apple-touch-icon.png",
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
