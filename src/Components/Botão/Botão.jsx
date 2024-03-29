import { EBotão } from "../../Estilizações/EBotão"
import { carrinho, cifrão } from "../assets"
import { Link } from "react-router-dom"
import { useState } from "react"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const Botão = ({ value }) => {
    const Click = () => {
        const cartLocal = JSON.parse(sessionStorage.getItem('cart'))

        if (cartLocal) {
            sessionStorage.setItem('cart', JSON.stringify([...cartLocal, value.description]));
        } else {
            sessionStorage.setItem('cart', JSON.stringify([value.description]));
        }
    };

    const [responses, setResponses] = useState([])
    const [contador, setContador] = useState(0)

    const Get = () => {
        setResponses(JSON.parse(sessionStorage.getItem('cart')))
    };

    return (
        <EBotão>
            <div>
                <Link to={`https://wa.me/5511934627103?text=Olá%2C+Bianca%2C+estes+são+os+produtos+que+quero+comprar%2C+=>+${responses.join(', ')}`}>

                    <button onClick={Get} className="verde">Comprar

                        <img width="25px" height="25px" src={cifrão} alt="Dolar" />

                    </button>
                </Link>
            </div >
            <div style={{ display: "flex", alignItems: "center" }}>
                <button id="Carrinho" onClick={() => { Click(); setContador(contador + 1) }} className="amarelo">
                    Carrinho
                    <img width="30px" height="30px" src={carrinho} alt="Carrinho" />
                </button>
                <div
                    style={{
                        width: "65px",
                        height: "44px",
                        margin: "0 0 0 5px",
                        background: "white",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "7px",
                        border: "solid 2px rgb(235, 156, 32)"
                    }}>
                    <p id="display" style={{ margin: 10 }}>{contador}</p>

                    <DeleteForeverIcon onClick={() => {
                        sessionStorage.removeItem("cart")
                        setContador(0)
                    }} style={{ fontSize: "30px", cursor: "pointer" }} />
                </div>
            </div>
        </EBotão >
    )
}
export default Botão