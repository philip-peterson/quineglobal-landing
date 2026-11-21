import { Fragment } from "react";
import { Col, Row } from "react-bootstrap";
import { featurettes } from "../content";

export default function Featurettes() {
  return (
    <>
      {featurettes.map((f, i) => {
        // Alternate the image side on wide screens.
        const flip = i % 2 === 1;
        return (
          <Fragment key={f.title}>
            <hr className="featurette-divider" />
            <div className="section-band">
              <Row className="featurette">
                <Col md={7} className={flip ? "order-md-2" : undefined}>
                  <h2 className="featurette-heading">{f.title}</h2>
                  <p className="lead">{f.body}</p>
                </Col>
                <Col md={5} className={flip ? "order-md-1" : undefined}>
                  <img className="featurette-image img-fluid mx-auto" src={f.image} alt="" style={{ width: 500, height: 500, objectFit: "cover" }} />
                </Col>
              </Row>
            </div>
          </Fragment>
        );
      })}
      <hr className="featurette-divider" />
    </>
  );
}
