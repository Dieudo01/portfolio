import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaLocationArrow,
  FaLayerGroup,

} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="accueil"
      className="bg-dark text-white py-5 vh-100 "
    >
      <div className="container">
        <div className="row align-items-center mt-5 mb-5">

          {/* Texte */}
          <div className="col-lg-7">

            <span className="badge bg-secondary mt-3 mb-3 p-2">
              Bienvenue sur mon portfolio 👋
            </span>

            <h1 className="display-3 fw-bold">
              Je suis{" "}
              <span className="text-primary">
                Dieudo Basa
              </span>
              <br />
              Développeur Web
            </h1>

            <p className="lead mt-5">
              Je suis développeur web basé en RDC, passionné
              par les solutions Smart City, la cartographie interactive et
              la création d'applications utiles pour les entreprises et les collectivités.
            </p>

            <div className="mt-4">
              <a
                href="#projets"
                className="btn btn-primary btn-lg me-3"
              >
              
                Voir mes projets
              <FaLayerGroup /> 
              
              </a>

              <a
                href="#contact"
                className="btn btn-outline-light btn-lg" >
                
                Me contacter {" "}
             <FaLocationArrow /> 
              </a>
            </div>

            <div className="mt-5 d-flex gap-3">

              <a
                href="#"
                className="btn btn-outline-light rounded-square"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="btn btn-outline-light rounded-square"
              >
                <FaLinkedinIn />
              </a>

              <a href="mailto:dieudobasa7@gmail.com" className="btn btn-outline-light rounded-square " >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Photo */}
          <div className="col-lg-5 text-center mt-5 mt-lg-0">

            <img
              src="/bg-ir.webp"
              alt="Photo de profil"
              className="img-fluid rounded-circle shadow"
              style={{
                width: "400px",
                height: "400px",
                objectFit: "cover",
              }}
            />

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;