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

  // Estrazione animale random
  function randomAnimal() {
    const indexCasuale = Math.floor(Math.random() * animalsChoices.length);
    const estratto = animalsChoices[indexCasuale];
    setAnimalList((prev) => [...prev, estratto]);
    return;
  }

  return (
    <div className="container py-4">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-md-6">
          {/* Pulsante estrazione animale */}
          <button className="btn btn-primary mb-4" onClick={randomAnimal}>
            Aggiungi un animale
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
        </div>
      </div>
    </div>
  );
}
