export default function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-grid">
                <div className="contact-left">
                    <h2 className="contact-title">
                        Let&apos;s Work <span className="gradient-text">Together</span>
                    </h2>
                    <p className="contact-text">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities
                        to be part of your vision. Feel free to reach out through the contact form or
                        connect with me directly.
                    </p>

                    <div className="contact-info-list">
                        <article className="contact-info-card">
                            <div className="contact-item-icon">@</div>
                            <div>
                                <p className="contact-item-label">Email</p>
                                <a href="mailto:mcleantech20@gmail.com" className="contact-item-value">
                                    mcleantech20@gmail.com
                                </a>
                            </div>
                        </article>

                        <article className="contact-info-card">
                            <div className="contact-item-icon">T</div>
                            <div>
                                <p className="contact-item-label">Phone</p>
                                <a href="tel:+27718807407" className="contact-item-value">
                                    +27 71 880 7407
                                </a>
                            </div>
                        </article>

                        <article className="contact-info-card">
                            <div className="contact-item-icon">L</div>
                            <div>
                                <p className="contact-item-label">Location</p>
                                <p className="contact-item-value">Johannesburg, South Africa</p>
                            </div>
                        </article>
                    </div>
                </div>

                <form className="contact-form-card">
                    <h3>Send Me a Message</h3>

                    <label htmlFor="contact-name">Your Name</label>
                    <input id="contact-name" type="text" placeholder="John Doe" />

                    <label htmlFor="contact-email">Email Address</label>
                    <input id="contact-email" type="email" placeholder="john@example.com" />

                    <label htmlFor="contact-message">Your Message</label>
                    <textarea id="contact-message" rows="6" placeholder="Tell me about your project..." />

                    <button type="button" className="contact-send-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
