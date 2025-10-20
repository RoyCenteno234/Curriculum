

export const NavBar = () =>{
    


    return (

<nav className="navbar navbar-expand-lg   px-4 py-2 justify-content-center fixed-top " style={{background:"#1a1a1a"}}>
  <div className="container">
    <a className="navbar-brand mx-auto text-white" href="#">Roy Centeno</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
      <ul className="navbar-nav gap-3">
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#sobre-mi">Sobre mi</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#habilidades">Habilidades</a>
        </li>
       <li className="nav-item">
        <a className="nav-link text-white" href="#proyectos">Proyectos</a>
       </li>

       <li>
        <a className="btn btn-md border border-white text-white" href="#contacto">CONTACTO</a>
       </li>
      </ul>
    </div>
  </div>
</nav>






    )
}