import { aboutMeData } from '../../data';

export default function AboutMe() {
    return (
        <section className="about-section" id="about">
            <p className="section-label">ABOUT ME</p>
            <h2 className="section-title">
                A Bit <span className="gradient-text">About Me</span>
            </h2>
            <div className="section-underline" />

            <div className="about-content">
                <div className="about-image-container">
                    <img src={aboutMeData.image} alt="About me" className="about-image" />
                </div>
                <div className="about-text">
                    <h3>
                        {aboutMeData.introTitle} <span className="about-span">{aboutMeData.introHighlight}</span>
                    </h3>

                    {aboutMeData.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}

                    <h3 className="about-span">Background-info</h3>
                    {aboutMeData.education.map((entry) => (
                        <div key={entry.school}>
                            <h4 className="gradient-text">{entry.school}</h4>
                            <ul className="education-list">
                                {entry.points.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
