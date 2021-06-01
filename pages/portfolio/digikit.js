import PortfolioLayout from "@/components/PortfolioLayout";
import { ExternalLink, TextLink } from "@/components/Link";
import { digikit as meta } from "@/utils/data";

const digikit = () => {
  return (
    <PortfolioLayout meta={meta}>
      <article className="portfolio">
        [The introduction video]
        <h2>Project Purpose and Goal</h2>
        <p>
          I started to learn React.js and the whole concept of full-stack
          development in March 2020. At the end of the year, I thought it's time
          to make an app to fully embrace the knowledge that I've learned. An
          e-commerce app seems the right one.
        </p>
        <p>
          It contains the CRUD methods through the REST API. With the front end,
          I could fully practically understand the "state management" concept
          which is quite new to me. (I used to work as a frontend developer 10
          years ago with PHP developers in China, there was no such thing back
          then.)
        </p>
        <h2>Web Stack and Explanation</h2>
        <p>
          When I was working as a screenplay writer, my main entertainment was
          reading articles on{" "}
          <ExternalLink href="https://scotch.io">scotch.io</ExternalLink> to
          learn the new tech concepts. So I'm familiar with Express REST API for
          a while, this time I "finally" got the chance to make something with
          it.
        </p>
        <p>
          To be honest, I'm still not very sure about the idea of using a state
          management tool to store the data locally, but with React and Redux
          team up, it's very convenient to maintain the shopping cart.
        </p>
        <p>
          The "component" development is also very new to me. Ten years ago,
          "CSS is global scoped" never bothered us, on the contrary, it's very
          helpful. So I took the opportunity to learn and implement
          styled-components in this app. This helped me understand the component
          more clearly.
        </p>
        <p>And the storybook is a very helpful tool to make UI components.</p>
        <h2>Problem and Thought Process</h2>
        <p>
          I thought it'd be smoothly making this app since I've learned tons of
          tutorials about these tech stacks. But I still bumped into the wall
          and stucked once in a while. Here are the main problems that bothered
          me.
        </p>
        <h3>The Error Handling</h3>
        <p>
          As a self-taught developer, I took the advice online that people
          recommend using axios for HTTP requests. But it gave me a lot of
          trouble.
        </p>
        <p>
          I write a middleware to deal with errors in the backend with messages
          and HTTP status code. But I found out every time axios gets a status
          code that is non-2xx, it just breaks without any messages I put in
          that error event. So I switched to <code>fetch</code>, it makes more
          sense to me. I wrote an article about{" "}
          <TextLink href="https://cyishere.dev/blog/error-handling-with-express">
            this error handling thing
          </TextLink>
          .
        </p>
        <h3>The Logic of Auth</h3>
        <p className="mb-4">
          By making this app I found out there are two parts about "auth", one
          is "authentication", the other is "authorization". I wrote{" "}
          <TextLink href="https://cyishere.dev/blog/auth-with-express-and-react">
            a blog post
          </TextLink>{" "}
          about the whole logic of them.
        </p>
        <h3>The Logic of Shopping Cart with Redux</h3>
        <h3>The Protection of Routes</h3>
      </article>
    </PortfolioLayout>
  );
};

export default digikit;
