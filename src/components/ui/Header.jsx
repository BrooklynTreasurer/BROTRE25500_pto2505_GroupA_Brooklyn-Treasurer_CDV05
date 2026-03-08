
export default function Header() {
    return (
        <>
          <section className="top-bar">
                <header className="header">
                    <p className="user">B</p>
                    <h2 className="header__title">Brooklyn Portfolio</h2>
                </header>

                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav__item"><a className="nav__link" href="#home">Home</a></li>
                        <li className="nav__item"><a className="nav__link" href="#about">About</a></li>
                        <li className="nav__item"><a className="nav__link" href="#projects">Projects</a></li>
                        <li className="nav__item"><a className="nav__link" href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </section>
        </>
    )
}
