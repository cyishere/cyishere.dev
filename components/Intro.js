import Emoji from "./Emoji";
import { ChevronDown } from "./Icon";
import { ExternalLink } from "./Link";

const Intro = () => {
  return (
    <section className="w-full px-6 mx-auto leading-6 md:w-1/2 md:px-0">
      <p className="text-3xl mb-12">
        <span className="bg-green-200 p-1">
          <Emoji name="vulcan salute">🖖🏻</Emoji> Hello, my name is CY.
        </span>{" "}
        <span className="text-base text-gray-400 block mt-4 ml-0 md:inline md:mt-0 md:ml-4">
          I live in Tianjin, China.{" "}
          <ExternalLink
            href="https://goo.gl/maps/FDnv79xdQD9LmuDh7"
            noBg={true}
          >
            <Emoji name="map">🗺️</Emoji>
          </ExternalLink>
        </span>
      </p>
      <p className="text-7xl text-yellow-500 mb-12">I make websites.</p>
      <p className="text-4xl mb-12">
        I am a self-taught <em>front-end developer</em> who also makes{" "}
        <em>full-stack</em> stuff.
      </p>
      <p className="text-xl mb-6">
        Althought I was a frontend developer from 2007-2010 and an UX designer
        from 2010-2012, after 8 years I&#39;ve been a screenplay writer &
        producer, there&#39;re a lot new tech stacks for me to catch up to
        re-start my career as a developer.
      </p>
      <p className="text-xl">
        Here&#39;re some projects I made for learning the amazing React.
      </p>
      <div className="flex justify-center items-center py-20 text-green-400">
        <ChevronDown />
      </div>
    </section>
  );
};

export default Intro;
