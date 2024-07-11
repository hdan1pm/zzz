import { useEffect, useState } from "react"
import { ApiWebURL } from "../utils"
import Productos from "../components/Productos"

function Tienda() {

    const [listaCategorias, setListaCategorias] = useState([])
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState([])

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "categorias.php"
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setListaCategorias(data)
                seleccionarCategoria(data[0])
            })
    }

    const dibujarLista = () => {
        return(
            <ul className="list-group">
                {listaCategorias.map(item =>
                    <li className={item.idcategoria === categoriaSeleccionada.idcategoria  
                        ?"list-group-item active"
                        :"list-group-item" 
                    } 
                        key={item.idcategoria} 
                        title={item.descripcion}
                        onClick={() => seleccionarCategoria(item)}>
                        {item.nombre} <span className="badge text-bg-secondary">{item.total}</span>
                    </li>
                )}
            </ul>
        )
    }

    const seleccionarCategoria = (item) => {
        console.log(item)
        setCategoriaSeleccionada(item)
    }

    return (
        <section id='tienda' className='padded'>
            <div className="container">
                <h2>Tienda</h2>
                <div className="row">
                    <div className="col-lg-3 col-md-4">
                        <h3>Categorías</h3>
                        {dibujarLista()}
                    </div>

                    
                    <div className="col-lg-9 col-md-8">
                        <h3>{categoriaSeleccionada.nombre}</h3>
                        <p>{categoriaSeleccionada.descripcion} ({categoriaSeleccionada.total})</p>
                        <Productos codigoCategoria={categoriaSeleccionada.idcategoria}/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tienda    