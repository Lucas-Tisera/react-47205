import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { getItemById } from '../../Helpers/Items'

const Item = () => {
    const { itemId } = useParams()
    const product = getItemById(itemId)
    //EJEMPLO UTILIZANDO HOOK CON FETCH PARA TRAER LOS ITEMS
    /*
        const location = useLocation()
        const product = location.state.item
    */

    return (
        <>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            {/* <img src={product.url} alt={product.title} /> */}
            <div>
                <h2>Item: <p>{product.title}</p></h2>
                <h3>Id: {product.id}</h3>
            </div>

        </div>
        </>
    )
}

export default Item