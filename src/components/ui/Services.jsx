import { servicesData } from '../../data';

/**
 * Renders the services section.
 *
 * @returns {JSX.Element}
 */
export default function Services() {
    return (
        <section className="services-section" id="services">
            <p className="section-label">SERVICES</p>
            <h2 className="section-title">
                What I <span className="gradient-text">Offer</span>
            </h2>
            <div className="section-underline" />

            <div className="services-grid">
                {servicesData.map((service) => (
                    <article key={service.title} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
