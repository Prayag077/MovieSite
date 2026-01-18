const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <h2 className="logo">
          🎬 Movie<span>Hub</span>
        </h2>

        {/* Links */}
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#trending">Trending</a>
          </li>
          <li>
            <a href="#watchlist">Watchlist</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
