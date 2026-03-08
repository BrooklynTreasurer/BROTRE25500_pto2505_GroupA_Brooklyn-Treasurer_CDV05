import { projectsData } from '../../data';

export default function Projects() {
    return (
        <section className="portfolio-section" id="projects">
            <p className="section-label">PORTFOLIO</p>
            <h2 className="section-title">
                My Recent <span className="gradient-text">Projects</span>
            </h2>
            <div className="section-underline" />

            <div className="filter-row">
                <button type="button" className="filter-pill active">All</button>
            </div>

            <div className="projects-grid">
                {projectsData.map((project) => (
                    <article className="project-card" key={project.title}>
                        <div className="project-image-container">
                            <img src={project.image} alt={`${project.title} preview`} className="project-image" />
                            <div className="project-overlay">
                                {project.viewLink ? (
                                    <a
                                        className="view-project"
                                        href={project.viewLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        View Project
                                    </a>
                                ) : (
                                    <span className="view-project view-project-disabled">Coming Soon</span>
                                )}
                            </div>
                        </div>

                        <div className="project-card-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag) => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
