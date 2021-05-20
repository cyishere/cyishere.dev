import { ButtonLink, TextLink } from "./Link";
import { Icon, ChevronRight } from "./Icon";

const FeaturedProjects = () => (
  <>
    <div className="bg-green-100 py-20">
      <div className="w-full mx-auto grid grid-cols-1 px-6 lg:w-2/3 lg:grid-cols-2 lg:px-0">
        <article className="pr-20 mb-10 lg:mb-0">
          <h3 className="text-3xl font-semibold mb-4">
            <TextLink href="/portfolio/digikit">digiKIT</TextLink>
          </h3>
          <p className="mb-4">
            ‘digiKIT’ is a fake e-commerce web app to demonstrate how this kind
            of app works on both server-side and client-side.
          </p>
          <div className="icons-group flex flex-row justify-start items-center mb-10">
            <Icon text="Express" iconUrl="/icons/express.svg" />
            <Icon text="MongoDB" iconUrl="/icons/mongodb.svg" />
            <Icon text="React" iconUrl="/icons/react.svg" />
            <Icon text="Redux" iconUrl="/icons/redux.svg" />
            <Icon
              text="styled-components"
              width="48"
              height="48"
              iconUrl="/icons/styled-components.svg"
            />
          </div>
          <p>
            <ButtonLink
              classes="bg-pink-500 px-4 py-2 text-gray-100 hover:bg-pink-300 hover:text-gray-600"
              href="/portfolio/digikit"
            >
              Project Details <ChevronRight />
            </ButtonLink>
          </p>
        </article>
        <img
          className="w-full shadow-lg"
          src="/img/portfolio/digikit/digikit-cover_s.jpg"
          alt="digiKIT screenshot"
        />
      </div>
    </div>

    <div className="w-full mx-auto grid grid-cols-1 py-20 px-6 lg:w-2/3 lg:grid-cols-2 lg:px-0">
      <img
        className="w-full shadow-lg mb-10 lg:mb-0"
        src="/img/portfolio/chat-app/chat-app-cover_s.jpg"
        alt="chat app screenshot"
      />
      <article className="pl-20">
        <h3 className="text-3xl font-semibold mb-4">
          <TextLink href="/portfolio/chat-app">Chat App</TextLink>
        </h3>
        <p className="mb-4">
          I am fascinated by the concept of GraphQL and Prisma, so I made a chat
          app to learn the subscription of GraphQL to know Prisma better. I used
          TailwindCSS for fast development.
        </p>
        <div className="icons-group flex flex-row justify-start items-center mb-10">
          <Icon text="React" iconUrl="/icons/react.svg" />
          <Icon text="TailwindCSS" iconUrl="/icons/tailwindcss.svg" />
          <Icon text="Apollo" iconUrl="/icons/apollographql.svg" />
          <Icon text="GraphQL" iconUrl="/icons/graphql.svg" />
          <Icon text="Prisma" iconUrl="/icons/prisma.svg" />
          <Icon text="PostgreSQL" iconUrl="/icons/postgresql.svg" />
        </div>
        <p>
          <ButtonLink
            classes="bg-green-500 px-4 py-2 text-gray-100 hover:bg-green-300 hover:text-gray-600"
            href="/portfolio/chat-app"
          >
            Project Details <ChevronRight />
          </ButtonLink>
        </p>
      </article>
    </div>
  </>
);

export default FeaturedProjects;
