import cart from './assets/cart.png'
const CartWidget = () => {

    return (
        <div>
            <img src={cart} alt="cart-widget" style={{width: '30px', height: '30px', marginRight: '5px', cursor: 'pointer'}}/>
            0
        </div>
    )
}

export default CartWidget