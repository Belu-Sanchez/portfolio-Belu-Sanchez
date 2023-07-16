import { Container, Row, Col } from "react-bootstrap";
import aboutMeImg from "../../../assets/aboutMeImg.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import './styles.scss';

function AboutMe() {
  return (
    <Container fluid className="home-about-section">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Permíteme presentarme
            </h1>
            <p className="home-about-description">
              Soy una apasionada desarrolladora frontend con una sólida comprensión de las 
              últimas tecnologías web y un enfoque creativo para crear experiencias digitales 
              excepcionales. A lo largo de mi trayectoria, he trabajado en proyectos diversos 
              y emocionantes, donde he tenido la oportunidad de desarrollar interfaces de 
              usuario intuitivas y responsivas utilizando HTML, CSS y JavaScript. 
              Además, cuento con experiencia en el uso de framework moderno como React,
               lo que me ha permitido crear aplicaciones web dinámicas y eficientes.
              <br />
              <br />
              <p>Lo que más me motiva es el deseo constante de aprender y crecer como desarrolladora frontend. Me mantengo actualizada con las últimas tendencias y mejores prácticas de la industria, y estoy siempre en busca de nuevas oportunidades para expandir mis conocimientos. Encaro cada desafío con entusiasmo y perseverancia, y disfruto encontrando soluciones innovadoras que brinden experiencias excepcionales a los usuarios.</p>
              <br />

              <p>Estoy entusiasmada por formar parte de un equipo dinámico y colaborativo, donde pueda aportar mis habilidades técnicas y mi creatividad para impulsar proyectos exitosos. Siempre estoy lista para asumir nuevos desafíos y trabajar en estrecha colaboración con otros profesionales para lograr resultados sobresalientes.</p>

            </p>
          </Col>
          <Col md={4} className="about-img">
            <Tilt>
              <img src={aboutMeImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>contáctame</h1>
            <p>
              Siéntase libre de <span className="fw-bold">conectarse </span>conmigo
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Belu-Sanchez"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mariabelensanchez-/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/designandcodewithbelu/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export { AboutMe };