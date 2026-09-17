import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "eya — LinkedIn outreach that doesn't stop at the reply",
  description:
    "Automate prospecting, start more conversations, and let Eya AI keep them moving when you don't have time.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-page font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
