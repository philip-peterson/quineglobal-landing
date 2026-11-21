import { Container } from "react-bootstrap";
import SiteNav from "./components/SiteNav";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import Featurettes from "./components/Featurettes";
import Apps from "./components/Apps";
import { links } from "./content";

export default function App() {
  return (
    <>
      <header>
        <SiteNav />
      </header>
      <main>
        <Hero />
        <Container className="marketing">
          <Pillars />
          <hr className="featurette-divider" />
          <Apps />
          <Featurettes />
        </Container>
        <footer className="container">
          <p className="float-end">
            <a href="#">Back to top</a>
          </p>
          <p>
            © {new Date().getFullYear()} Quine Global &nbsp;·&nbsp; <a href={links.blog}>Blog</a>
          </p>
        </footer>
      </main>
    </>
  );
}
