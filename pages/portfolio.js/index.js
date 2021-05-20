import Card from "@/components/Card";
import Emoji from "@/components/Emoji";
import FeaturedProjects from "@/components/FeaturedProjects";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { projects } from "@/utils/data";

const Portfolio = () => (
  <Layout seoTitle="Portfolio">
    <div className="w-full px-6 mx-auto md:w-1/2 md:px-0">
      <PageHeader classes="text-yellow-500">
        <Emoji name="Atom Symbol">⚛️</Emoji> Learning by Doing Projects
      </PageHeader>
    </div>
    <main>
      <FeaturedProjects />
      <div className="bg-gray-100 pt-20 pb-40">
        <div className="w-full mx-auto grid grid-cols-1 gap-8 px-6 lg:w-2/3 md:grid-cols-3 lg:px-0">
          {projects.map((project) => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    </main>
  </Layout>
);

export default Portfolio;
