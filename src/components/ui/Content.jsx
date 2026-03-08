import heroImage from '../images/hero-image.jpg';

export default function Content() {
    return (
        <section className="content" id="home">
            <div className="content-text-container">
                <p className="availability-pill">Available for Work</p>
                <h1 className="content-title">
                    Hi, I&apos;m <span className="gradient-text">Brooklyn Treasurer</span>
                </h1>
                <h2 className="content-subtitle">Web Developer &amp; UI/UX Designer</h2>
                <p className="content-text">
                    I craft beautiful, functional web experiences that solve real problems.
                    Specialized in modern web technologies and creating seamless user
                    interfaces.
                </p>

                <div className="hero-actions">
                    <button className="hire-me-button" type="button">
                        Hire Me
                    </button>
                    <button className="projects-button" type="button">
                        View Projects
                    </button>
                </div>

                <div className="social-icons">
                    <a
                        href="https://github.com/brooklyntreasurer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label="GitHub"
                    >
                        GH
                    </a>
                    <a
                        href="https://www.linkedin.com/in/brooklyntreasurer/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        aria-label="LinkedIn"
                    >
                        IN
                    </a>
                    <a href="mailto:hello@brooklyntreasurer.dev" className="social-icon" aria-label="Email">
                        @
                    </a>
                </div>
            </div>

            <div className="content-image-container">
                <div className="hero-frame">
                    <img src={heroImage} alt="Portfolio preview" className="content-image" />
                </div>
                <div className="floating-code">&lt;/&gt;</div>
            </div>
        </section>
    );
}
