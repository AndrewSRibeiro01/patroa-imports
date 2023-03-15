import Patroa1 from "../../Imagens/LogoBia1.png"
import Vestido from "../../Imagens/Vestido.png"
import Cropped from "../../Imagens/Cropped.png"
import Biquini from "../../Imagens/Biquini.png"
import Lingerie from "../../Imagens/Lingerie.png"
import { Navbar, ImgPatroa } from "../../Estilizações/EHeader"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <Navbar>
            <nav className="navbar bg-body- " style={{ margin: "0", padding: "0" }}>
                <div className="container-fluid" style={{ background: "#e4b1a5", margin: "0 10px 0px 0px", padding: "0" }}>
                    <Link to={"/"} style={{ color: "white", fontWeight: "500", margin: "0", padding: "0" }} className="navbar-brand"> <ImgPatroa src={Patroa1} />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div style={{ background: "#e4b1a5" }} className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 style={{ color: "white" }} className="offcanvas-title" id="offcanvasNavbarLabel">Variedades</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <div className="card" style={{ width: "160px", border: "solid #eb9c20", boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)", margin: "10px" }}>
                                        <img src={Vestido} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Vestidos</h5>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="card" style={{ width: "160px", border: "solid #eb9c20", boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)", margin: "10px" }}>
                                        <img src={Cropped} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Croppeds</h5>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <div className="card" style={{ width: "160px", border: "solid #eb9c20", boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)", margin: "10px" }}>
                                        <img src={Biquini} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Biquines</h5>
                                        </div>
                                    </div>

                                </li>
                                <li className="nav-item">
                                    <div className="card" style={{ width: "160px", border: "solid #eb9c20", boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)", margin: "10px" }}>
                                        <img src={Lingerie} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">Lingerie</h5>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <form className="d-flex mt-3" role="search">
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        </Navbar>
    )
}

export default NavBar