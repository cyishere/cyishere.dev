import PortfolioLayout from "@/components/PortfolioLayout";
import { ExternalLink, TextLink } from "@/components/Link";
import Video from "@/components/Video";
import { digikit as meta } from "@/utils/data";

const digikit = () => {
  return (
    <PortfolioLayout meta={meta} otherProjectName="Chat App">
      <article className="w-full">
        <div className="portfolio flow px-8 mx-auto lg:w-4/5 lg:px-0 xl:w-2/3">
          <Video
            src="https://res.cloudinary.com/cyishere/video/upload/v1622445673/cyishere/blog/unauthorized_r1gibh.mp4"
            poster="/img/blog/auth-with-express-and-react/unauthorized.png"
            description="Demo walk through"
          />
          <h2>Project Purpose and Goal</h2>
          <p>
            I started to learn React.js and the whole concept of full-stack
            development in March 2020. At the end of the year, I thought it's
            time to make an app to fully embrace the knowledge that I've
            learned. An e-commerce app seems the right one.
          </p>
          <p>
            It contains the CRUD methods through the REST API. With the front
            end, I could fully practically understand the "state management"
            concept which is quite new to me. (I used to work as a frontend
            developer 10 years ago with PHP developers in China, there was no
            such thing back then.)
          </p>

          {/* with screenshot */}
          <div className="grid grid-cols-1 gap-4 pt-0 mb-16 lg:grid-cols-2 lg:pt-16">
            <div className="portfolio flow mb-6 place-self-center lg:mb-0">
              <h2>Web Stack and Explanation</h2>
              <p>
                When I was working as a screenplay writer, my main entertainment
                was reading articles on{" "}
                <ExternalLink href="https://scotch.io">scotch.io</ExternalLink>{" "}
                to learn the new tech concepts. So I'm familiar with Express
                REST API for a while, this time I "finally" got the chance to
                make something with it.
              </p>
              <p>
                To be honest, I'm still not very sure about the idea of using a
                state management tool to store the data locally, but with React
                and Redux team up, it's very convenient to maintain the shopping
                cart.
              </p>
              <p>
                The "component" development is also very new to me. Ten years
                ago, "CSS is global scoped" never bothered us, on the contrary,
                it's very helpful. So I took the opportunity to learn and
                implement styled-components in this app. This helped me
                understand the component more clearly.
              </p>
              <p>
                And the Storybook is a very helpful tool to make UI components.
              </p>
              <p>
                I use Figma for designing. (This was the first time I used
                Figma.)
              </p>
            </div>
            <img
              src="/img/portfolio/digikit/placeholder-2.jpg"
              alt="digiKIT screenshot 2"
              className="place-self-center"
            />
          </div>
        </div>

        {/* Screenshots Group */}
        <div className="grid grid-cols-1 mt-6 lg:grid-cols-3">
          <img
            src="/img/portfolio/digikit/placeholder-3.jpg"
            alt="digiKIT screenshot 3"
          />
          <img
            src="/img/portfolio/digikit/placeholder-4.jpg"
            alt="digiKIT screenshot 4"
          />
          <img
            src="/img/portfolio/digikit/placeholder-5.jpg"
            alt="digiKIT screenshot 5"
          />
        </div>

        <div className="portfolio flow px-8 mx-auto lg:w-4/5 lg:px-0 xl:w-2/3">
          <h2>Problem and Thought Process</h2>
          <p>
            I thought it'd be smoothly making this app since I've learned tons
            of tutorials about these tech stacks. But I still bumped into the
            wall and stucked once in a while. Here are the main problems that
            bothered me.
          </p>
          <h3>The Error Handling</h3>
          <p>
            As a self-taught developer, I took the advice online that people
            recommend using axios for HTTP requests. But it gave me a lot of
            trouble.
          </p>
          <p>
            I write a middleware to deal with errors in the backend with
            messages and HTTP status code. But I found out every time axios gets
            a status code that is non-2xx, it just breaks without any messages I
            put in that error event. So I switched to <code>fetch</code>, it
            makes more sense to me. I wrote an article about{" "}
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
        </div>
      </article>
    </PortfolioLayout>
  );
};

export default digikit;
