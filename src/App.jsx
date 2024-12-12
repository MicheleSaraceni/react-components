import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-between">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;