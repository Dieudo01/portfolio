export default function Projects() {
    const projects = [
        {
            title: "Smart City",
            description: "Plateforme de Gestio urbaine intelligente avec tableaux de bord et catographie",
            Technologies: "React | Express.js | Leaflet | Chart.js",
            lien : "#"
        },
        {
            title: "Artisana 2.0",
            description: "Plateforme de valorisation des artisants et des promotion du savoir-faire local",
            technologies: "React | Express.js | PostgreSQL",
            lien : "#"
        },
        {
            title: "Mini Facturation",
            description: "Application de gestion et génération de factures professionnelles",
            technologies: "PHP | Bootstrap | MySQL | JavaScript",
            lien : "#"
        },
        {
            title: "Site de Blog",
            description: "Site de diffusion de blog; infos et articles avec un BackOffice de gestion Multi-Utilisateurs",
            technologies: "PHP | Bootstrap | MySQL | JavaScript",
            lien : "#"
        },
        
    ]
    
    return (
        <section id="projets" className="py-5 min-vh-100">
            <div className="container mt-5">
                <div className="tex-center mb-4">
                    <h2 className="fw-bold"> Mes Projets </h2>
                    <p className="text-muted">Quelques réalisations et idées de projects.</p>
                </div>

                <div className="row g-4">
                    {projects.map((project) => (
                        <div key={project.title} className="col-md-6 col-lg-4">
                            <div className="card h-100 shadow-sm">
                                <div className="card-body">
                                    <h4>{project.title}</h4>
                                    <p>{project.description}</p>
                                    <p className="text-primary">{project.technologies}</p>
                                    <a href={project.lien}
                                        className="btn btn-primary">
                                        Visiter
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))};
                </div>

            </div>
        </section>
    )
}