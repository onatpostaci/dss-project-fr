import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { NextAuthProvider } from "./providers";

export const metadata: Metadata = {
  title: "InsightAIzer",
  description: "Generate the best insights with Gen-AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
