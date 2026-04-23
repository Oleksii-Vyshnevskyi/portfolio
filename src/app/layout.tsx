import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Oleksii Vyshnevskyi — Product Designer";
const siteDescription =
  "Product designer focused on complex SaaS systems, workflows, and data-driven interfaces. Building tools that improve decision-making and real-world operations.";

export const metadata: Metadata = {
  metadataBase: new URL("https://alexvyshnevskyi.com"),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://alexvyshnevskyi.com",
    siteName: "Oleksii Vyshnevskyi",
    images: [
      {
        url: "/images/SMA-hero-01.png",
        width: 2560,
        height: 1948,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/images/SMA-hero-01.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
