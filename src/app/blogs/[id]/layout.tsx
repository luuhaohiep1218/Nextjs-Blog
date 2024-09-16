import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs Detail",
  description: "Blogs View Detail description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
