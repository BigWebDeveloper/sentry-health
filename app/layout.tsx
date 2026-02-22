import type { Metadata } from "next";

import "./globals.css";
import NavLink from "./component/NavLinks";
import { Poppins, Roboto, Inter, Nunito_Sans } from "next/font/google";
import Live from "./component/Live";
import ServiceWorker from "./component/service-worker/ServiceWorker";
import DynamicTitle from "./component/DynamicTitle";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const nunitosans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--nunitosans",
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  description:
    "Santrys Health is a leading healthcare provider dedicated to delivering exceptional medical services and compassionate care. With a team of experienced healthcare professionals, Santrys Health offers a wide range of medical specialties and state-of-the-art facilities to ensure the well-being of our patients. Our commitment to excellence, innovation, and patient-centered care makes us a trusted choice for healthcare needs. Explore our comprehensive services, expert medical staff, and cutting-edge technology at Santrys Health.",
  keywords:
    "healthcare, medical services, patient care, Santrys Health, health and wellness",

  metadataBase: new URL("https://bigweb-portfolio-nextjs.vercel.app/"),
  manifest: "/manifest.json",
  openGraph: {
    description:
      "Explore our modern healthcare projects and designs built with Next.js, React.js, TypeScript, and Tailwind CSS. Discover high-performance, scalable web applications and innovative frontend solutions.",
    siteName: "Santrys Health",
    url: "https://bigweb-portfolio-nextjs.vercel.app/", // og:url
    locale: "en_US",
    images: [
      {
        url: "/images/opengraph-image.jpg",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "bigweb developer og image",
      },
    ],
    type: "website",
  },
  robots: { index: true, follow: true },
  applicationName: "Santry Health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${nunitosans.variable} ${inter.variable} ${poppins.variable} antialiased`}
      >
        <div className="hidden md:flex items-center justify-center">
          <p className="text-lg font-semibold">
            Please open this app- on a mobile device 📱
          </p>
        </div>

        {/* Mobile app */}
        <div className="relative block md:hidden sm:px-10 p-5">
          <DynamicTitle />
          <ServiceWorker />
          <Live />
          <NavLink />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
