import { useEffect, useState } from "react"

function Carrito() {
    const [listaItems, setListaItems] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {

        leerServicio()
    }, [])

    const leerServicio = () => {
        const datosCarrito = JSON.parse(sessionStorage.getItem("carritocompras"))
        setListaItems(datosCarrito)
        console.log(datosCarrito)
        if(datosCarrito !== null) {
            calcularTotal(datosCarrito)
        }
    }


    const dibujarTabla = () => {
        return(
            <table className="table">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Producto</th>
                            <th className="text-end">Precio</th>
                            <th className="text-end">Cantidad</th>
                            <th className="text-end">Subtotal</th>
                            <th className="text-center">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaItems !==  null
                        ?listaItems.map(item =>
                            <tr key={item.idproducto}>
                                <td>{item.idproducto}</td>
                                <td>{item.nombre}</td>
                                <td className="text-end">{Number(item.precio).toFixed(2)}</td>
                                <td className="text-end">{item.cantidad}</td>
                                <td className="text-end">{(item.precio * item.cantidad).toFixed(2)}</td>
                                <td className="text-center"><i className="bi bi-x-lg icono-eliminar" title="Eliminar" 
                                        onClick={() => eliminarItem(item)}></i></td>
                            </tr>
                        )
                        :<div className="alert alert-warning" role="alert">
                            Su carrito de compras está actualmente vacío
                        </div>
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="4" className="text-end">Total</th>
                            <th className="text-end">{total.toFixed(2)}</th>
                        </tr>
                    </tfoot>
            </table>
        )
    }

    const eliminarItem = (item) => {
        let carritoMenos = listaItems.filter(itemCart => itemCart.idproducto !== item.idproducto)
        setListaItems(carritoMenos)
        sessionStorage.setItem("carritocompras", JSON.stringify(carritoMenos))
        calcularTotal(carritoMenos)
    }

    const calcularTotal = (datosCarrito) => {
        let sumaTotal = datosCarrito.reduce((acumulador, fila) => acumulador + fila["precio"] * fila["cantidad"] ,0)
        setTotal(sumaTotal)
    }

    const vaciarCarrito = () => {
        setListaItems([])
        sessionStorage.removeItem("carritocompras")
        setTotal(0)
    }

    return (
        <section className='padded'>
            <div className="container">
                <h2>Carrito de compras</h2>
                {dibujarTabla()}
                <button className="btn btn-danger"
                    onClick={() => vaciarCarrito()}>Vaciar carrtito</button>
            </div>
        </section>
    )
}

export default Carrito