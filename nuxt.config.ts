export default defineNuxtConfig({
  css: ["@/assets/css/main.css"],
  typescript: {
    typeCheck: true,
  },
  app: {
    head: {
      title: "Fyreplace",
      viewport:
        "width=device-width, height=device-height, initial-scale=1.0, viewport-fit=cover",
      meta: [
        {
          "http-equiv": "x-ua-compatible",
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
          content: "/mstile-144x144.png?v=1.6.0",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico?v=1.6.0",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "48x48",
          href: "/favicon-32x32.png?v=1.6.0",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png?v=1.6.0",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png?v=1.6.0",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          sizes: "180x180",
          href: "/apple-touch-icon-180x180.png?v=1.6.0",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          sizes: "167x167",
          href: "/apple-touch-icon-167x167.png?v=1.6.0",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          sizes: "152x152",
          href: "/apple-touch-icon-152x152.png?v=1.6.0",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          sizes: "120x120",
          href: "/apple-touch-icon-120x120.png?v=1.6.0",
        },
        {
          rel: "apple-touch-icon-precomposed",
          type: "image/png",
          sizes: "180x180",
          href: "/apple-touch-icon-180x180.png?v=1.6.0",
        },
        {
          rel: "apple-touch-icon-precomposed",
          type: "image/png",
          sizes: "167x167",
          href: "/apple-touch-icon-167x167.png?v=1.6.0",
        },
        {
          rel: "apple-touch-icon-precomposed",
          type: "image/png",
          sizes: "152x152",
          href: "/apple-touch-icon-152x152.png?v=1.6.0",
        },
        {
          rel: "apple-touch-icon-precomposed",
          type: "image/png",
          sizes: "120x120",
          href: "/apple-touch-icon-120x120.png?v=1.6.0",
        },
        {
          rel: "mask-icon",
          type: "image/svg",
          href: "/safari-pinned-tab.svg?v=1.6.0",
          color: "coral",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ],
    },
  },
});
