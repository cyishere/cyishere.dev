import Layout from "./Layout";
import { ExternalLink } from "./Link";

const PortfolioLayout = ({ meta, children }) => {
  return (
    <Layout seoTitle={meta.title} seoDescription={meta.description}>
      <main className="mb-20 px-8 mx-auto lg:w-2/3 lg:px-0">
        {/* HEADER */}
        <header className="mb-10">
          <h1 className="text-5xl font-black mb-6">{meta.title}</h1>
          <div className="font-mono text-gray-500">
            <p className="mb-4">{meta.description}</p>
          </div>
        </header>

        {/* TECH STACK */}
        <section className="mb-10">
          <h3 className="text-3xl font-bold mb-4">Tech Stack</h3>
          <div className="flex flex-col justify-start item-start sm:flex-row">
            <div className="mb-6 sm:mr-10">
              <h4 className="text-2xl font-semibold mb-2">Backend:</h4>
              <ul className="list-inside list-disc">
                {meta.techStack.backend.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="mb-6 sm:mr-10">
              <h4 className="text-2xl font-semibold mb-2">Frontend:</h4>
              <ul className="list-inside list-disc">
                {meta.techStack.frontend.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="sm:pt-10">
              <ExternalLink href={meta.techStack.github}>
                Code on Github
              </ExternalLink>
            </div>
          </div>
        </section>

        {children}
      </main>
    </Layout>
  );
};

export default PortfolioLayout;
