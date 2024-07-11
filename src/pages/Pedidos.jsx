import { useEffect, useState } from "react"
import { ApiWebURL } from "../utils"
import "./Directores.css"

function Pedidos() {
    const [listaPedidos, setListaPedidos] = useState([])

    useEffect(() => {
        leerServicio()
    }, [])

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "pedidos.php"
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setListaPedidos(data)
            }
        )
    }

    
    const dibujarTabla = () => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>idpedido</th>
                        <th>Fecha de pedidos</th>
                        <th>Usuario</th>
                        <th>Nombres</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPedidos.map(item =>
                        <tr key={item.idpedido}>
                           
                            <td>{item.idpedido}</td>
                            <td>{item.fechapedido}</td>                            
                            <td>{item.nombres}</td>
                            <td>{item.usuario}</td>
                            <td>{item.total}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }




    
    return (
        <section id='pedidos' className='padded'>
            <div className="container">
                <h2>Pedidos</h2>
                
                {dibujarTabla()}
                
            </div>
        </section>
    )
}

export default Pedidos