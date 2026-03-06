export default function Content() {
    return (
        <>
            <section className="content">
                <div className="content__image-container">
                    <img src="/images/hero-image.jpg" alt="Hero" className="content__image" />
                </div>

                <div className="content__text-container">
                    <h2 className="content__title">Welcome to <span className="gradient-text">Brooklyn Treasurer</span></h2>
                    <h3 className="content__subtitle">Front-End Developer | Blending Design & Code to Build Seamless Digital Experiences</h3>
                    <p className="content__text">
                        Brooklyn Treasurer is a platform dedicated to providing financial insights and resources for the residents of Brooklyn. Our mission is to empower individuals and businesses with the knowledge and tools they need to manage their finances effectively.
                    </p>
                    <button className="hire-button">Hire me</button>
                    <button className="projects-button">View Projects</button>

                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/brooklyntreasurer/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src="/images/linkedin-icon.png" alt="LinkedIn" />
                        </a>
                        <a href="https://github.com/brooklyntreasurer" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img src="/images/github-icon.png" alt="GitHub" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}