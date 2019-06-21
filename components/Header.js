import Link from 'next/link'
import React, {Component} from 'react'

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: true,
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const collapsed = this.state.collapsed
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show'
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right'

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
          <div className="container">
            <Link href="/">
              <a className="navbar-brand">Homework</a>
            </Link>

            <button onClick={this.toggle}
                    className={`${classTwo}`}
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarResponsive"
                    aria-controls="navbarResponsive"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"/>
            </button>

            <div className={`${classOne}`} id="navbarResponsive">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link href="/">
                    <a className="nav-link">Home <span className="sr-only">(current)</span></a>
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link href={"/favorites"}>
                    <a className="nav-link">Favorites <span className="sr-only">(current)</span></a>
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </nav>
    )
  }
}

export default Header
