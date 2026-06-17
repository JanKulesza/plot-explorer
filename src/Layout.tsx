import { Link, Outlet } from "react-router-dom"
import icon from "./assets/plot-explorer.svg"
import gitHub from "./assets/github.svg"
import linkedIn from "./assets/linkedin.svg"
// import "./Layout.css"

const Layout = () => {
  return (
    <>
    <header className="flex justify-between items-center p-2 border-b border-border">
        <Link className="flex items-center gap-2" to="/">
            <img src={icon} alt="Plot Explorer" />
            <h1 className="text-xl font-bold">Plot Explorer</h1>
        </Link>
        <nav className="flex gap-4 mr-4">
            <Link className="hover:text-primary font-semibold" to="/">Search</Link>
            <Link className="hover:text-primary font-semibold" to="/whishlist">Wishlist</Link>
        </nav>
    </header>
    <Outlet />
    <footer className="border-t border-border p-4 text-center gap-2">
        <div className="flex flex-col items-center mb-8">
        <h2 className="text-xl font-semibold">Connect with me</h2>
        <a className="flex gap-2 hover:text-primary" href="https://github.com/JanKulesza" target="_blank" rel="noopener noreferrer">
            <img src={gitHub} alt="GitHub" />
            GitHub
        </a>
        <a className="flex gap-2 hover:text-primary" href="https://www.linkedin.com/in/jan-kulesza-277a11275/" target="_blank" rel="noopener noreferrer">
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