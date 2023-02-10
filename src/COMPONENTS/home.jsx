export default function FirstComponent(hola, hola2, hola3) {
  const shortGreeting = "Hola";
  const shortFarewell = "Chau";
  const extendedFarewell = "Chau, nos vemos mañana";

  const { userName, userId, userActive } = {};
  const { adminName, adminId, adminActive } = {};
  const { pageName, pageId, pageActive } = {};

  const [show, setShow] = useState(true);
  const [active, setActive] = useState(true);
  const [status, setStatus] = useState(true);

  greet(shortGreeting);
  sayFarewell(extendedFarewell);

  return (
    <>
      <SecondComponent
        textH1="Hola"
        textH2="¿Como estas?"
        textP="Nos vemos!"
      >
        hola
      </SecondComponent>

      <h1
        className="hola"
        accessKey="2"
      >
        hola2
      </h1>
    </>
  );
}
