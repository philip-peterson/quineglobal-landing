import { Col, Row } from "react-bootstrap";
import { pillars } from "../content";

export default function Pillars() {
  return (
    <div className="section-band">
      <Row>
        {pillars.map((p) => (
          <Col lg={4} key={p.title}>
            <img className="rounded-circle" src={p.image} alt="" width={140} height={140} style={{ objectFit: "cover" }} />
            <h2>{p.title}</h2>
            <p>{p.body}</p>
            <p>
              <a className="btn btn-secondary" href={p.href} role="button">
                View details »
              </a>
            </p>
          </Col>
        ))}
      </Row>
    </div>
  );
}
