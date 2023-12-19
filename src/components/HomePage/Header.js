const Header = ()=>{
    return (
        <div className="header-container">
            <section className="logo-section">
            </section>
            <section className="nav-section">
                <nav className="nav-section-one">
                    <ul>
                        <li>HOME</li>
                        <li>PRODUCTS</li>
                        <li>ABOUT</li>
                    </ul>
                </nav>
                <nav className="nav-section-two">
                    <ul>
                        <li><i class='bx bxs-user-plus'></i><p>Login</p></li>
                        <li><i class='bx bxs-arrow-to-right'></i><p>Register</p></li>
                        <li><i class='bx bxs-cart-alt'></i><p>Cart</p></li>
                    </ul>
                </nav>
            </section>
        </div>
    )
}

export default Header;