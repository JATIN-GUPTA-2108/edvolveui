function Navbar() {
    return (
      <div >
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
<img src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0" width={"50px"}/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Dashboard <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Experience Zone</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            learning zone
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      
      <li className="nav-item">
        <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

    </form>
      </li>
    </ul>
{/* <!--     <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> --> */}
     <ul className="navbar-nav">
      <li className="nav-item mx-2">
        <button type="button" class="btn btn-dark"  href="#">Discovery zone</button>
      </li>
      <li className="nav-item mx-2">
      <img  src="https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0" width={"50px"}/>
      </li>
      <li className="nav-item mx-2">


        Harshita Shukla 

      </li>
    </ul>
  </div>
</nav>
      </div>
    );
  }
  
  export default Navbar;
  