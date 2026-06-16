import {
  FaCloudDownloadAlt

} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3 sticky-top ">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3 border-bottom" href="#">
                  <span className="text-primary"> <span className="text-white">  {" <"} </span> Dieudo</span> Basa <span className="text-primary"> <span> {"/> "} </span></span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          title="toogle"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#accueil">Accueil</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#apropos">À propos</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#competences">Compétences</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projets">Projets</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
          
          <a href="/cv-dieudonne-basa.pdf"
            className="btn btn-outline-light" download
          > Télécharger CV {"  "}
            <FaCloudDownloadAlt />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;