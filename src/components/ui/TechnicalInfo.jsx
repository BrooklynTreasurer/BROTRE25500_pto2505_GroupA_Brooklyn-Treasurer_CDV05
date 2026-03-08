import { technicalSkillsData } from '../../data';

export default function TechnicalInfo() {
    return (
        <section className="skills-section" id="skills">
            <p className="section-label">MY SKILLS</p>
            <h2 className="section-title">
                Technical <span className="gradient-text">Expertise</span>
            </h2>
            <div className="section-underline" />

            <div className="skills-grid">
                {technicalSkillsData.map((group) => (
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
    );
}
