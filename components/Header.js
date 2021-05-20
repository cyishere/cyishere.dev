import { TextLink } from "./Link";

const Header = ({ pathname }) => {
  return (
    <header className="mb-20">
      <div className="lg:container mx-auto py-4 flex flex-row justify-between items-center">
        <h1 className="logo text-5xl font-black">
          <TextLink href="/" classes="text-yellow-500">
            cyishere
          </TextLink>
        </h1>
        <nav>
          <ul className="nav-list flex flex-row justify-end items-center">
            <li>
              <TextLink
                href="/"
                classes={pathname === "" ? "active" : ""}
                noBg={true}
              >
                home
              </TextLink>
            </li>
            <li>
              <TextLink
                href="/portfolio"
                classes={pathname === "portfolio" ? "active" : ""}
                noBg={true}
              >
                portfolio
              </TextLink>
            </li>
            <li>
              <TextLink
                href="/blog"
                classes={pathname === "blog" ? "active" : ""}
                noBg={true}
              >
                blog
              </TextLink>
            </li>
            <li>
              <TextLink
                href="/about"
                classes={pathname === "about" ? "active" : ""}
                noBg={true}
              >
                about
              </TextLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
