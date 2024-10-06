import CartWidget from "../CartWidget/CartWidget"
import pelicula from './assets/pelicula.png'

const NavBar = () => {

    return (
        
        <nav style={{display: 'flex', justifyContent: 'space-between', padding: '0 20px', alignItems: 'center', backgroundColor: '#ffffff', height: '50px', borderBottom: '1px solid #ccc'}}>
            <img src={pelicula} alt="logo" style={{width: '48px', height: '48px', marginRight: '5px'}}/>
            <h1>TuPelicula</h1>
            <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'space-between', width: '300px', margin: '0 auto'}}>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Peliculas</a></li>
                <li><a href="#">Series</a></li>
                <li><a href="#">Categorias</a></li>
            </ul>
            <CartWidget />
        </nav>
    
    )
    
}

export default NavBar