
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