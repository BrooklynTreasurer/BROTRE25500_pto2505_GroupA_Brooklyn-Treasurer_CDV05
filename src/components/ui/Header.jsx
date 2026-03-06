
export default function Header() {
    return (
        <>
          <section className="top-bar">
                <header className="header">
                    <h1 className="header__title">Brooklyn Treasurer</h1>
                </header>

                <nav className="nav">
                    <ul className="nav-list">
                        <li className="nav__item">Home</li>
                        <li className="nav__item">About</li>
                        <li className="nav__item">Projects</li>
                        <li className="nav__item">Contact</li>
                    </ul>
                </nav>
            </section>
        </>
    )
}