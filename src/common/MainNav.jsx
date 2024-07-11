import { Link } from "react-router-dom"

function MainNav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">ID+</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/proveedores">Proveedores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/empleados">Empleados</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tienda">Tienda</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/directores">Directores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/futbol">Fútbol</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pedidos">Pedidos</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/carrito"><i className="bi bi-basket"></i> Carrito</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><i className="bi bi-person"></i> Iniciar sesión</Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default MainNav