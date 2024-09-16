import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs List",
  description: "Blogs description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
