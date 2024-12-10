import { Link } from "react-router-dom";
const NavBar = ({title,mode,toggle}) =>{
  
    return (
        <>
        <nav className={`navbar fixed-top navbar-expand-lg bg-${mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{color: mode === 'primary'? 'black':'white'}}>{title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{borderColor: mode === 'primary'? 'black':'white'}} >
      <span className="navbar-toggler-icon" style={{backgroundImage:`url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`}} ></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/" style={{color: mode === 'primary'? 'black':'white'}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/About" style={{color: mode === 'primary'? 'black':'white'}}>About {title}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/News" style={{color: mode === 'primary'? 'black':'white'}}>HealthNews</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link"  to="/sNews" style={{color: mode === 'primary'? 'black':'white'}}>SportsNews </Link>
        </li>
       </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-danger" type="submit" style={{color: mode === 'primary'? 'black':'white'}}> Search </button>
      </form>
      <div className="form-check form-switch mx-2" style={{color: mode === 'primary'? 'black':'white'}}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={toggle} />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">DarkMode</label>
</div>
    </div>
  </div>
</nav>
        </>
    )
}

export default NavBar;