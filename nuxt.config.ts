export default defineNuxtConfig({
  ssr: false,
  target: "static",
  css: ["@/assets/css/main.css"],
  typescript: {
    typeCheck: true,
  },
  meta: {
    title: "Fyreplace",
    viewport:
      "width=device-width, height=device-height, initial-scale=1.0, viewport-fit=cover",
    meta: [
      {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge",
      },
      {
        name: "color-scheme",
        content: "light dark",
      },
      {
        name: "msapplication-TileColor",
        content: "white",
      },
      {
        name: "msapplication-TileImage",
        content: "/mstile-144x144.png",
      },
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico?v=1",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png?v=1",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon-16x16.png?v=1",
      },
      {
        rel: "apple-touch-icon",
        type: "image/png",
        sizes: "180x180",
        href: "/apple-touch-icon.png?v=1",
      },
      {
        rel: "mask-icon",
        type: "image/svg",
        href: "/safari-pinned-tab.svg?v=1",
        color: "#FF8243",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
    ],
  },
});
