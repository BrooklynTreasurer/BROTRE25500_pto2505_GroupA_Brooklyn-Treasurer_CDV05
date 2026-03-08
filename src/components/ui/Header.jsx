
import { useState } from 'react';

/**
 * Renders the top navigation bar with mobile menu behavior.
 *
 * @returns {JSX.Element}
 */
export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    /**
     * Closes the mobile navigation after selecting a link.
     *
     * @returns {void}
     */
    const handleNavLinkClick = () => {
        setIsNavOpen(false);
    };

    return (
        <>
            <section className="top-bar">
                <header className="header">
                    <p className="user">B</p>
                    <h2 className="header__title">Brooklyn Portfolio</h2>
                </header>

                <button
                    type="button"
                    className={`nav-toggle${isNavOpen ? ' is-open' : ''}`}
                    aria-label="Toggle navigation"
                    aria-expanded={isNavOpen}
                    onClick={() => setIsNavOpen((prev) => !prev)}
                >
                    <span className="nav-toggle-line" />
                    <span className="nav-toggle-line" />
                    <span className="nav-toggle-line" />
                </button>

                <nav className={`nav${isNavOpen ? ' is-open' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav__item"><a className="nav__link" href="#home" onClick={handleNavLinkClick}>Home</a></li>
                        <li className="nav__item"><a className="nav__link" href="#about" onClick={handleNavLinkClick}>About</a></li>
                        <li className="nav__item"><a className="nav__link" href="#projects" onClick={handleNavLinkClick}>Projects</a></li>
                        <li className="nav__item"><a className="nav__link" href="#contact" onClick={handleNavLinkClick}>Contact</a></li>
                    </ul>
                </nav>
            </section>
        </>
    );
}
