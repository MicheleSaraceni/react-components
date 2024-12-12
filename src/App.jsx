function App() {
  return (
    <>
      <div className="container d-flex flex-column align-items-center justify-content-between">
        <header>
          <h1>Il miei racconti</h1>
        </header>
        <main>

          <div className="card" style={{ width: "18rem" }}>
            <img src="../public/img/fantasy600x400.webp" className="card-img-top" alt="fantasy600x400" />
            <div className="card-body">
              <h5 className="card-title">Avventurieri fantasy</h5>
              <p className="card-text">
                Tipico gruppo di avventurieri fantasi in procinto di andare a sconfiggere un potente malvagio nel suo castello.
              </p>
              <a href="#" className="btn btn-primary">Vai alla storia</a>
            </div>
          </div>

        </main>
        <footer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure praesentium aspernatur culpa illo aut quia voluptatum natus tempora facere laboriosam! Rem itaque consectetur culpa dolore, harum ipsam neque porro quaerat.
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;