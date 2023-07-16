import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './styles.scss';

function Footer() {

  return (
    <Container fluid className="footer">
      <Row className="d-flex justify-content-between">
        <Col md="4" className="footer-copywright">
          <h3>Diseñada y desarrollada por Belu Sánchez</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Belu-Sanchez"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/mariabelensanchez-/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/designandcodewithbelu/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export { Footer };