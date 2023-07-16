import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiHtml5,
  DiCss3,
  DiSass,
} from "react-icons/di";
import {
  SiFirebase,
  SiBulma,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFigma,
  SiTypescript,
  SiCanva
} from "react-icons/si";
import {
  FaBootstrap,

} from "react-icons/fa";
import './styles.scss';

function Skills() {
  return (

    <Row style={{ justifyContent: "center", paddingBottom: "50px" }} className="skills-section">
      <h1 className="text-center fw-bold">
      Mis conocimientos
            </h1>
      <Col xs={4} md={1} className="tech-icons">
        <DiHtml5 />
      </Col>
       <Col xs={4} md={1} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiJavascript1 />
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <DiReact />
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <SiTypescript />
      </Col>

      <Col xs={4} md={1} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiSass />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiNodejs />
      </Col>
      <h1 className="text-center fw-bold">
      Frameworks CSS
      </h1>

      <Col xs={4} md={1} className="tech-icons">
        <FaBootstrap />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiBulma />
      </Col>

      <h1 className="text-center fw-bold">
      Programas de Diseño
      </h1>

      <Col xs={4} md={1} className="tech-icons">
        <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiFigma />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiCanva/>
      </Col>
    </Row>
  );
}

export { Skills };