import Head from "next/head";

const SEO = ({ title, description }) => {
  const content = description
    ? description
    : "Thoughts on JavaScript, React, CSS, GraphQL and Prisma.";

  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>
        {title} | CY, a Frontend Developer also do fullstack development.
      </title>
      <meta name="description" content={content} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
  );
};

export default SEO;
