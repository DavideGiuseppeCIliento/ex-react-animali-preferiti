function ListComponent() {
  const { useState } = React;

  const animalsChoices = [
    "Cane",
    "Gatto",
    "Pappagallo",
    "Cavallo",
    "Panda",
    "Scimmia",
    "Homunculus",
  ];

  const [animalList, setAnimalList] = useState([]);
  const [show, setShow] = useState(false);

  // Estrazione animale random
  function randomAnimal() {
    const indexCasuale = Math.floor(Math.random() * animalsChoices.length);
    const estratto = animalsChoices[indexCasuale];
    setAnimalList((prev) => [...prev, estratto]);
    return;
  }

  return (
    <>
      <div className="container py-4">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-6">
            {/* Pulsante estrazione animale random */}
            <button className="btn btn-primary mb-4" onClick={randomAnimal}>
              Estrazione animale un animale
            </button>

            {/* LISTA ANIMALI */}
            <details>
              <summary className="h5 mb-2">Lista di Animali</summary>
              <ul className="list-group">
                {animalList.map((a, i) => (
                  <li key={i} className="pb-1 pt-1 list-group-item">
                    {a}
                  </li>
                ))}
              </ul>
            </details>

            {/* Pulsante estrazione animale */}
            <button
              className="btn btn-primary mb-4"
              onClick={() => setShow(true)}
            >
              Inserisci un animale
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <Modal
              show={show}
              setAnimalList={setAnimalList}
              setShow={setShow}
              onClose={() => setShow(false)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
