import { Col, Button } from "react-bootstrap";
import { FC } from "react";
import Props from "./types";
import './styles.scss';

const CardProject: FC<Props> = ({ type, title, description, children, linkGitHub, linkDemo }) => {
  return (

    <Col xs={4} md={3} className="project-card-view">
      <h3>{title}</h3>
      {children}
      <p>{description}</p>
      <div className="d-flex justify-content-around">
        <Button className="btn"
          href={linkGitHub}
          target="_blank"
          type={type}>
          GitHub
        </Button>
        <Button className="btn"
          href={linkDemo}
          target="_blank"
          type={type}>
          Demo
        </Button>
      </div>
    </Col>
  );
}

export { CardProject };