import { useEffect, useState } from "react"
import { ApiWebURL } from "../utils"

function Empleados() {

    const [listaEmpleados, setListaEmpleados] = useState([])

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "empleados.php"
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setListaEmpleados(data)
            })
    }

    const dibujarCuadricula = () => {
        return (
            <div className="row row-cols-xxl-5 row-cols-xl-4 row-cols-lg-3 row-cols-2  g-4">

            {listaEmpleados.map(item =>
                <div className="col"  key={item.idempleado}>
                    <div className="card">
                        <img src={ApiWebURL + "fotos/" + item.foto} className="card-img-top" alt={item.nombres} />
                        <div className="card-body">
                            <h5 className="card-title">{item.nombres} {item.apellidos}</h5>
                            {item.nombre} <span className="badge text-bg-secondary">{item.total}</span>
                            <p className="card-text">{item.cargo}</p>
                        </div>
                        
                    </div>
                </div>
            )}

            </div>
        )
    }

    return (
        <section id='empleados' className='padded'>
            <div className="container">
                <h2>Empleados</h2>
                {dibujarCuadricula()}
            </div>
        </section>
    )
}

export default Empleados