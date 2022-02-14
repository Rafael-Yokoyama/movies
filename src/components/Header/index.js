import { Link } from "react-router-dom"
import "./header.css"
export default function Header (){
    return (
        <header>
            <Link className="favoritos" to="/"> Movies</Link>
            <Link className="favoritos" to="/"> ❤️</Link>
        </header>
    )
}