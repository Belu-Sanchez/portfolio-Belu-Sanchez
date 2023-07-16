import Typewriter from "typewriter-effect";
import './styles.scss';

function TypeDescription() {
  return (
    <Typewriter
      options={{
        strings: [
          "Desarrollador Front End ",
          "Diseñadora UX/IU",
          "Diseñadora de indumentaria",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export { TypeDescription };