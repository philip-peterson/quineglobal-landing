import { Container, Nav, Navbar } from "react-bootstrap";
import { links } from "../content";

export default function SiteNav() {
  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">Quine Global</Navbar.Brand>
        <Navbar.Toggle aria-controls="site-nav" />
        <Navbar.Collapse id="site-nav">
          <Nav className="me-auto mb-2 mb-md-0">
            <Nav.Link href={links.linkedin}>LinkedIn</Nav.Link>
            <Nav.Link href={links.github}>GitHub</Nav.Link>
            <Nav.Link href={links.blog}>Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
