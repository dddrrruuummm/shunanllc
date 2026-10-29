import type { Metadata, Viewport } from "next";
import { Header, Footer } from "@/components/shell";
import { company } from "@/lib/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: { default: "SHUN AN LLC | Luxury Chauffeur & Event Fleets", template: "%s | SHUN AN LLC" },
  description: "Explore limousine service, business transfers and luxury vehicle rental inquiries with SHUN AN LLC in Chino, California. Plan your next journey.",
  openGraph: { type: "website", locale: "en_US", siteName: "SHUN AN LLC", title: "SHUN AN — An arrival above all.", description: "Limousine service and luxury vehicle inquiries from Chino, California.", url: company.url, images: [{ url: "/opengraph-image.jpg", width: 1672, height: 941 }] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#080a0b", width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context": "https://schema.org", "@type": "LocalBusiness", name: company.name, url: company.url, email: company.email, description: "Limousine service", address: { "@type": "PostalAddress", streetAddress: company.address, addressLocality: "Chino", addressRegion: "CA", postalCode: "91710", addressCountry: "US" }, logo: `${company.url}/icon.svg` };
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><Header/><main id="main">{children}</main><Footer/><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}/></body></html>;
}
