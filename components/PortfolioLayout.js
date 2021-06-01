import Layout from "./Layout";
import { ExternalLink } from "./Link";

const PortfolioLayout = ({ meta, children }) => {
  return (
    <Layout seoTitle={meta.title} seoDescription={meta.description}>
      <main className="mb-20 w-full">
        {/* HEADER */}
        <header className="w-full grid gap-4 grid-cols-1 mb-10 lg:grid-cols-2">
          <div className="mb-4 px-6 flex flex-col justify-center items-start lg:mb-0 lg:pl-16">
            <h1 className="text-5xl font-black mb-6">{meta.title}</h1>
            <div className="font-mono text-gray-500">
              <p>{meta.description}</p>
            </div>
          </div>
          <img className="w-full" src={meta.cover} alt={meta.title} />
        </header>

        <div className="px-8 mx-auto lg:w-4/5 lg:px-0 xl:w-2/3">
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
        </div>
      </main>
    </Layout>
  );
};

export default PortfolioLayout;
