import "./itemdetail.css"

const ItemDetail = ({ product }) => {
    return (
        <div className="item-detail">
            <img src={product.image} alt="" />
            <div className="container"> 
                <h2 className="title-detail">{product.name}</h2>
                <p className="text-detail">Precio: ${product.price}</p>
                <p className="text-detail">{product.description}</p>
            </div>
            
        </div>
    )
}

export default ItemDetail