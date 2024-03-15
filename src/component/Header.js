import { useState } from "react";
import  logo  from "../image/TestyGoodFood.png";

const Title = () => {
    return (
        <a href="/"><img className="logo" src={logo} alt="TestyGoodFood Logo" /></a>
    )
}

const Header = () => {

    const [login, setLogin] = useState(true);

    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    {
                    login == true ? 
                    <button className="login" onClick={() => {
                        setLogin(false)
                    }}>Login</button> :
                    <button className="logout" onClick={() => {
                        setLogin(true)
                    }}>Logout</button>
                }
                </ul>
            </div>
        </div>
    )
}

export default Header;