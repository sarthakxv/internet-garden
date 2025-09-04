const Footer = () => {
  const links = [
    {
      title: "Twitter",
      href: "https://twitter.com/0xSarthak",
    },
    {
      title: "LinkedIn",
      href: "https://linkedin.com/in/sarthakv",
    },
    {
      title: "Github",
      href: "https://github.com/sarthakvdev",
    },
    {
      title: "Blog",
      href: "https://sarthakv.hashnode.dev",
    },
  ];

  return (
    <div className="flex flex-row">
      {links.map((link, index) => (
        <div key={index} className="mr-1">
          <a href={link.href} target="_blank" rel="noreferrer noopener">
            {link.title}
          </a>
          {index === links.length - 1 ? null : " • "}
        </div>
      ))}
    </div>
  );
};

// Nextra 4 theme config
export default {
  project: {
    link: "https://github.com/sarthakxv"
  },
  docsRepositoryBase: "https://github.com/sarthakvdev/internet-garden",
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Sarthak"
    }
  },
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">SARTHAK.</span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Sarthak's Internet Garden" />
      <meta
        name="og:description"
        content="Welcome to my Internet Garden. Here, you will find about me, my projects, writings and bookshelf."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="/banner.png" />
      <meta
        name="twitter:site:domain"
        content="https://sarthakverma.vercel.app"
      />
      <meta name="twitter:url" content="https://sarthakverma.vercel.app" />
      <meta name="twitter:creator" content="0xSarthak" />
      <meta name="og:title" content="Sarthak Verma's Internet Garden" />
      <meta name="og:image" content="/banner.png" />
      <meta name="apple-mobile-web-app-title" content="Sarthak." />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#ffffff" />
      {/* --- */}
      <link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png" />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
      {/* --- */}
    </>
  ),
  search: {
    component: true
  },
  toc: {
    backToTop: true
  },
  editLink: {
    component: true,
    text: "Edit this page on GitHub"
  },
  feedback: {
    content: "Question? Give us feedback →",
    labels: "feedback"
  },
  footer: {
    component: <Footer />
  }
};
