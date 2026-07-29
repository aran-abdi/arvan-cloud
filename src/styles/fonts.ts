import localFont from "next/font/local";

/** Yekan Bakh (FaNum) — used for Persian / RTL UI. */
export const yekanBakh = localFont({
  src: [
    {
      path: "../assets/fonts/yekan-bakh/YekanBakhFaNum-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../assets/fonts/yekan-bakh/YekanBakhFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/yekan-bakh/YekanBakhFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/yekan-bakh/YekanBakhFaNum-SemiBold.woff2",
      weight: "450",
      style: "normal",
    },
    {
      path: "../assets/fonts/yekan-bakh/YekanBakhFaNum-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/yekan-bakh/YekanBakhFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/yekan-bakh/YekanBakhFaNum-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../assets/fonts/yekan-bakh/YekanBakhFaNum-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-yekan-bakh",
  display: "swap",
});
