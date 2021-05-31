import { useRouter } from "next/router";

import SEO from "./SEO";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ seoTitle, seoDescription, slug, children }) => {
  const pathname = useRouter().pathname.slice(1);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} slug={slug} />

      <Header pathname={pathname} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
