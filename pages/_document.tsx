import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Kaushan+Script&family=Rancho&family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-red-500 bg-gradient-to-r from-blue-500 to">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
