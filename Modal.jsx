function Modal({ setAnimalList, show = false, setShow, onClose = () => {} }) {
  const { useState } = React;
  const [formData, setFormData] = useState("");

  function onClose() {
    setShow(false);
    return;
  }

  function handleInput(e) {
    setFormData(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setAnimalList((prev) => [...prev, formData]);
    setFormData("");

    console.log(formData);
  }

  return (
    show &&
    ReactDOM.createPortal(
      <div className="modal-container">
        <div className="modalcss">
          <h2>Insriscii un Animale</h2>

          <form onSubmit={handleSubmit}>
            <label className="form-label" htmlFor="animale">
              Nome animale
            </label>
            <input
              id="animale"
              className="form-control"
              value={formData}
              onChange={handleInput}
              placeholder="Es. Fenicottero"
            />
            <div className="mt-3 d-flex gap-2">
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={onClose}
              >
                Annulla
              </button>
              <button type="submit" className="btn btn-success">
                Conferma
              </button>
            </div>
          </form>
        </div>
      </div>,
      document.body
    )
  );
}
