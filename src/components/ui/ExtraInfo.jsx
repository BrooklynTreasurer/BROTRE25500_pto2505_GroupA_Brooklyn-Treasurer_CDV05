import kanbanPreview from '../images/KanBan-Preview.png';
import PortfolioPreview from '../images/Portfolio-Preview.png';
import heroPreview from '../images/hero-image.jpg';
import PodcastAppPreview from '../images/PodcastApp-Preview.png';

export default function ExtraInfo() {
    const projects = [
        {
            image: kanbanPreview,
            title: 'KanBan Task Manager',
            description:
                'A full-featured e-commerce solution with payment integration and admin dashboard.',
            tags: ['HTML', 'JavaScript', 'CSS', 'Mobile', 'UI/UX'],
        },
        {
            image: PortfolioPreview,
            title: 'Portfolio Website Design',
            description: 'Creative portfolio website with smooth animations and modern UI.',
            tags: ['React', 'CSS', 'UI/UX'],
        },
        {
            image: PodcastAppPreview,
            title: 'Podcast App UI',
            description: 'Modern podcast application interface with intuitive navigation and rich media playback.',
            tags: ['React', 'JavaScript', 'UI/UX', 'Mobile' ,'CSS'],
        },
    ];

    const services = [
        {
            title: 'Website Development',
            description:
                'Custom, responsive websites built with modern technologies. From simple landing pages to complex web applications.',
        },
        {
            title: 'UI/UX Design',
            description:
                'Beautiful, intuitive interfaces designed with users in mind. Creating seamless experiences that drive engagement.',
        },
        {
            title: 'Mobile App UI',
            description:
                'Responsive mobile interfaces that work flawlessly across all devices and screen sizes.',
        },
        {
            title: 'Web Maintenance',
            description:
                'Ongoing support, updates, and maintenance to keep your website running smoothly and securely.',
        },
    ];

    const skills = [
        {
            title: 'Frontend',
            items: [
                ['HTML5', 95],
                ['CSS3/Sass', 90],
                ['JavaScript', 92],
                ['React', 88],
                ['Next.js', 85],
                ['TypeScript', 82],
                ['Tailwind CSS', 90],
            ],
        },
        {
            title: 'Backend',
            items: [
                ['Node.js', 67],
                ['Express.js', 35],
                ['PostgreSQL', 42],
                ['REST APIs', 90],
            ],
        },
        {
            title: 'Tools & Others',
            items: [
                ['Figma', 62],
                ['Git/GitHub', 88],
            ],
        },
    ];

    return (
        <main className="extra-info">
            <section className="portfolio-section" id="projects">
                <p className="section-label">PORTFOLIO</p>
                <h2 className="section-title">
                    My Recent <span className='gradient-text'>Projects</span>
                </h2>
                <div className="section-underline" />

                <div className="filter-row">
                    <button type="button" className="filter-pill active">All</button>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <article className="project-card" key={project.title}>
                            <div className="project-image-container">
                                <img src={project.image} alt={`${project.title} preview`} className="project-image" />
                                <div className="project-overlay">
                                    <button type="button" className="view-project">
                                        View Project
                                    </button>
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

            <section className="services-section" id="services">
                <p className="section-label">SERVICES</p>
                <h2 className="section-title">
                    What I <span className='gradient-text'>Offer</span>
                </h2>
                <div className="section-underline" />

                <div className="services-grid">
                    {services.map((service) => (
                        <article key={service.title} className="service-card">
                            <div className="service-icon">[]</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            {service.title === 'UI/UX Design' && (
                                <a href="#contact" className="learn-more">
                                    Learn more
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </section>

            <section className="skills-section" id="skills">
                <p className="section-label">MY SKILLS</p>
                <h2 className="section-title">
                    Technical <span className='gradient-text'>Expertise</span>
                </h2>
                <div className="section-underline" />

                <div className="skills-grid">
                    {skills.map((group) => (
                        <article key={group.title} className="skills-card">
                            <div className="skills-header">
                                <div className="skills-icon">&lt;/&gt;</div>
                                <h3>{group.title}</h3>
                            </div>
                            <div className="skills-items">
                                {group.items.map(([label, value]) => (
                                    <div className="skill-row" key={label}>
                                        <div className="skill-meta">
                                            <span>{label}</span>
                                            <span>{value}%</span>
                                        </div>
                                        <div className="skill-track">
                                            <div className="skill-fill" style={{ width: `${value}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}
