import { Badge, Col, Row } from "react-bootstrap";
import { apps } from "../content";

export default function Apps() {
  return (
    <div className="section-band" id="apps">
      <Row className="g-4">
        <Col xs={12}>
          <h2 className="featurette-heading apps-heading">Our Open Source Apps</h2>
        </Col>
        {apps.map((a) => (
          <Col md={6} lg={3} key={a.name}>
            <div className="app-card">
              <h3>
                {a.name}
                {a.badge && (
                  <Badge bg="warning" text="dark" className="ms-2 align-middle">
                    {a.badge}
                  </Badge>
                )}
              </h3>
              <p>{a.body}</p>
              <a className="btn btn-secondary" href={a.href}>
                {a.cta} »
              </a>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
