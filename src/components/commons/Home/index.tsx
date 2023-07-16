import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../../assets/homeImg.svg";
import { AboutMe, TypeDescription } from "../index";
import './styles.scss'

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                ¡Hola!
              </h1>

              <h1 className="heading-name">
                Soy
                <strong className="main-name"> Belu Sánchez</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <TypeDescription />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutMe />
    </section>
  )
}

export { Home };