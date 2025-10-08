import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload the hero image for faster first paint */}
        <link rel="preload" href="/images/serenity-hero.jpg" as="image" />
        {/* Hint browser to fetch important images earlier */}
        <link rel="preload" href="/images/spa1.jpg" as="image" />
      </Head>
      <body>
        {/* Hidden eager image to ensure the hero image starts downloading immediately in all browsers */}
        <img
          src="/images/serenity-hero.jpg"
          alt=""
          style={{
            position: "absolute",
            width: "1px",
            height: "1px",
            opacity: 0,
            pointerEvents: "none",
          }}
          loading="eager"
          fetchpriority="high"
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
