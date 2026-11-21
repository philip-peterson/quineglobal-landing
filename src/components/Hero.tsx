import { Carousel, Container } from "react-bootstrap";
import { slides } from "../content";

export default function Hero() {
  return (
    <Carousel interval={4000}>
      {slides.map((s) => (
        <Carousel.Item key={s.title}>
          <img src={s.image} alt="" />
          <Container>
            <Carousel.Caption
              className={[
                s.align === "start" && "text-start",
                s.lightCaption && "carousel-caption-notdark",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <h1>{s.title}</h1>
              <p>{s.body}</p>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
