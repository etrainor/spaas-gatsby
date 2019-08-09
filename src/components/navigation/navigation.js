import React from "react"
import "../navigation/navigation.scss"

class Navigation extends React.Component {
  constructor(props) {
    super(props);
      this.toggleNavbar = this.toggleNavbar.bind(this);
      this.state = {
        collapsed: true,
      };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const classDropdownMenu = 'navbar-collapse' + (this.state.collapsed ? ' collapse' : '')

    return (
      <>
        <div className="hamburger">
          <button onClick={this.toggleNavbar}>
            <span className="navbar-toggler-icon">☰ Menu</span>
          </button>
        </div>
        <nav className={classDropdownMenu} id="navbarSupportedContent">
          <ul className="navigation">
            <li><a href="/about-us">About</a></li>
            <li>Services
              <ul className="dropdown-menu">
                <li><a href="/advisory-services">Advisory</a></li>
                <li><a href="/advocacy-services">Advocacy</a></li>
              </ul>
            </li>

            <li>Resources
              <ul className="dropdown-menu">
                <li><a 
                //TODO: eventually set this form link up as a modal
                href="https://www.dropbox.com/s/f7e4oiu3lkzgdiu/New%20Client%20Information.docx?dl=0" target="_blank">New Client Form</a></li>
                <li><a href="/resources">Recommended Reading</a></li>
              </ul>
            </li>
            {/* <li>News
              <ul className="dropdown-menu">
                <li><a href="/advisory-services">Blog</a></li>
              </ul>
            </li> */}
            {/* <li><a href="https://httpstatusdogs.com/img/404.jpg">Blog</a></li> */}
            {/* <li><a href="https://httpstatusdogs.com/img/307.jpg">Client Portal</a></li> */}
            <li><a href="/contact-form">Contact</a></li>
          </ul>
        </nav>
      </>
    )
  }
}

export default Navigation

