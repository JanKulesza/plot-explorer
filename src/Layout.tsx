import { Link, Outlet } from "react-router-dom"
import icon from "./assets/plot-explorer.svg"
import gitHub from "./assets/github.svg"
import linkedIn from "./assets/linkedin.svg"
import "./Layout.css"

const Layout = () => {
  return (
    <>
    <header className="header">
        <Link className="icon-text" to="/">
        <img src={icon} alt="Plot Explorer" />
        <h1>Plot Explorer</h1>
        </Link>
        <nav>
            <Link className="link" to="/">Search</Link>
            <Link className="link" to="/whishlist">Wishlist</Link>
        </nav>
    </header>
    <Outlet />
    <footer className="footer">
        <div>
        <h2>Connect with me</h2>
        <a className="link icon-text" href="https://github.com/JanKulesza" target="_blank" rel="noopener noreferrer">
            <img src={gitHub} alt="GitHub" />
            GitHub
        </a>
        <a className="link icon-text" href="https://www.linkedin.com/in/jan-kulesza-277a11275/" target="_blank" rel="noopener noreferrer">
            <img src={linkedIn} alt="LinkedIn" />
            LinkedIn
        </a>
        </div>
        <p>&copy; 2026 Plot Explorer. All rights reserved.</p>
    </footer>
    </>
  )
}

export default Layout