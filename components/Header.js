import Link from 'next/link'

const Header = () => (
    <header>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <Link href="/">
          <a className="navbar-brand">Homework</a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link">Home <span className="sr-only">(current)</span></a>
              </Link>
            </li>
            <li className="nav-item active">
              <Link href="/favorites">
                <a className="nav-link">Favorites <span className="sr-only">(current)</span></a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
)

export default Header
