export default function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "Javascript",
        "TypeScript",
        "React",
        "Express.js",
        "PHP",
        "MySQL",
        "PostgreSQL",
        "Git & GitHub",
        "Leaflet",
        "QGIS",
        "OpenStreetMap",
    ];

    return (
        <section id="competences" className="py-5 vh-100 bg-dark ">
            <div className="container mt-5">
                <div className="text-center text-light mb-5">
                    <h2 className="fw-bold">
                        Mes compétences
                    </h2>
                    <p className="text-muted text-light">
                        Les Technologies que j'utilise.
                    </p>
                </div>

                <div className="row g-4">
                    {skills.map((skill) => (
                    
                    <div key={skill} className="col-md-4 col-lg-3">
                        <div className="card h-100 shadow-sm text-center">
                            <div className="card-body">
                                <h5>{skill}</h5>
                            </div>
                        </div>
                    </div>
                ))}
                </div>  
            </div>

        </section>
    )
}