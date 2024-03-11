const logo = new URL("../image/TestyGoodFood.png", import.meta.url);

const Title = () => {
    return (
        <img className="logo" src={logo} alt="TestyGoodFood Logo" />
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