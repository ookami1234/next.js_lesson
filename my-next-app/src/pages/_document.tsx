import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="jp">
      <Head>
        <script
          src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"
          integrity="sha384-ZxA11VyWmBbWAPjPQkpAXb0FST3XVDcZTs7p1VdcBDOXvFssL6ksWE3OU6A8bB03"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
          integrity="sha384-QJHtvGhmr9F6P0vQZQeO/zAc69g0LI8a6n1bKHl1dTrbA2x2Dz+fF8B8Bb0p1p79"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
