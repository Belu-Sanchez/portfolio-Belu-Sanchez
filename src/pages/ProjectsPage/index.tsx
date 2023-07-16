import { Container, Row } from "react-bootstrap";
import { CardProject } from "../../components/commons";
import MovieApp from "../../assets/movies-app.png";
import GeneradorMemes from "../../assets/generador-de-memes.png";
import ControladorGastos from "../../assets/controlador-de-gastos.png";
import MarvelApi from "../../assets/marvel-app.png";
import ToDoApp from "../../assets/to-do-app.png";

const ProjectsPage = () => {

    return (
        <Container fluid className="project-section">
            <Container>
                <h1 className="project-heading">
                    Proyectos recientes
                </h1>
                <p style={{ color: "white" }}>
                    Aquí hay algunos proyectos en los que he trabajado recientemente.</p>

                <Row className="projects-section d-flex justify-content-center">

                    <CardProject
                        title="Movies - React App"
                        description="Desarrollé y lancé una página web innovadora que se conecta a una API de películas, brindando a los usuarios registrados acceso instantáneo a estrenos, películas populares y los últimos lanzamientos."
                        linkGitHub="https://github.com/Belu-Sanchez/moviesADA"
                        linkDemo="https://movies-ada.vercel.app/"
                        type="button" >
                        <img
                            src={MovieApp}
                            alt="home pic"
                            className="img-fluid"
                            style={{ maxHeight: "450px" }}
                        />
                    </ CardProject>
                    <CardProject
                        title="To-DO App"
                        description="Es una aplicación de lista de tareas que brinda una 
                        solución práctica para organizar y gestionar tus tareas diarias.
                         Desarrollada con tecnologías modernas como React, SASS y Bootstrap, 
                         ofrece una interfaz intuitiva y fácil de usar."
                        linkGitHub="https://github.com/Belu-Sanchez/to-do-list-react-app"
                        linkDemo="https://to-do-list-react-app.vercel.app/"
                        type="button" >
                        <img
                            src={ToDoApp}
                            alt="home pic"
                            className="img-fluid"
                            style={{ maxHeight: "450px" }}
                        />
                    </ CardProject>
                    <CardProject
                        title="Marvel App"
                        description="Explora el fascinante mundo de los cómics con esta página web 
                        interactiva. Utilizando la potente API REST de MARVEL, podrás acceder a una 
                        amplia lista de cómics y personajes, obteniendo información detallada sobre 
                        cada uno de ellos."
                        linkGitHub="https://github.com/Belu-Sanchez/marvel-api"
                        linkDemo="https://belu-sanchez.github.io/marvel-api/"
                        type="button" >
                        <img
                            src={MarvelApi}
                            alt="home pic"
                            className="img-fluid"
                            style={{ maxHeight: "450px" }}
                        />
                    </ CardProject>
                    <CardProject
                        title="Controlador de gastos"
                        description="Es un sistema de gestión financiera intuitivo. Agrega, edita y filtra 
                        tus operaciones monetarias. Resumen detallado y balance instantáneo. 
                        ¡Llevar las cuentas nunca fue tan divertido!."
                        linkGitHub="https://github.com/Belu-Sanchez/ahorradas"
                        linkDemo="https://belu-sanchez.github.io/ahorradas/"
                        type="button" >
                        <img
                            src={ControladorGastos}
                            alt="home pic"
                            className="img-fluid"
                            style={{ maxHeight: "450px" }}
                        />
                    </ CardProject>
                    <CardProject
                        title="Generador de Memes"
                        description="Crea tus propios MEMES con una interfaz intuitiva. 
                        Desarrollado en JS con eventos, funciones y manipulación del DOM. 
                        ¡Diviértete y respeta los derechos de autor!."
                        linkGitHub="https://github.com/Belu-Sanchez/generador_de_memes"
                        linkDemo="https://belu-sanchez.github.io/generador_de_memes/"
                        type="button" >
                        <img
                            src={GeneradorMemes}
                            alt="home pic"
                            className="img-fluid"
                            style={{ maxHeight: "450px" }}
                        />
                    </ CardProject>
                </Row>
            </Container>
        </Container>
    );
}

export { ProjectsPage }