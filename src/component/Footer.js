const Footer = () => {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <div className="footer">
            <h2>Created By <span className="heart">&hearts;</span> Parth Baldaniya </h2>
            <h2>&copy; {currentYear} <span className="logo-name">TestyGoodFood</span></h2>
        </div> 
    )
}

export default Footer;