const Title = () => {
    return (
        <img className="logo" src="https://cdn.dribbble.com/users/7918631/screenshots/15678630/media/3b295f16dcae01b070a2c509fc493f65.jpg" alt="TestyGoodFood Logo"></img>
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