import Theming from "@/Theme/Theming";
import Script from 'next/script';
import "./globals.css";

import Headpage from "./Header/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`}
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body>
        <Theming>
          <Headpage />
          <main>{children}</main>
        </Theming>
      </body>
    </html>
  );
}
