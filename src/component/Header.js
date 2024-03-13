import  logo  from "../image/TestyGoodFood.png";

const Title = () => {
    return (
        <a href="/"><img className="logo" src={logo} alt="TestyGoodFood Logo" /></a>
    )
}

const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <li>Login</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;