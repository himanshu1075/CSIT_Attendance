import collegeIcon from "../public/collegeLogo.webp"
function Header() {
    

    return (
        <>
        <div id="section1" style={{ textAlign: "center" }}>
            <h2 style={{ marginBottom: "0", marginTop: "1%" }}>Department Of</h2>
            <h1>Computer Science And Information Technology</h1>
            <h2>Acropolis Institute Of Technology And Research</h2>
            <img className="lazy-loaded" src={collegeIcon} alt="College-logo"></img>
            <hr/>
        </div>
    </>
    )
}

export default Header;