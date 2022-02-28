import { Link } from "react-router-dom"
import "./header.css"
export default function Header (){
    return (
        <header>
            <Link  to="/"> Movies</Link>
            <Link className="favoritos" to="/favorites"> ❤️</Link>       
        </header>
    )
}