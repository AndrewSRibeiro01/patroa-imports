import styled from "styled-components"

export const Principal = styled.main`
  text-align: center;
  background-color: #eac7b4;
`
export const Imagem = styled.img`
  width: 300px;
  margin: 5px 7px 30px 0 ;
  padding: 0;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 20%) 6px 6px 2px 1px;

`
export const ImagemCard = styled.img`
    cursor: pointer;
    width: 300px;
    margin: 0px;
    padding: 0;
`
export const Cards = styled.div`
    display: flex;
    max-width:1160px;
    gap: 10px;
    flex-wrap:wrap;
    width:70%;
    margin: 0 auto;
    justify-content: center;
    @media (max-width: 768px){
        width:100%;
    }
`
export const CardItens = styled.div`
    gap: 5px;
    cursor:pointer;
    display:flex;
`
export const Espaço = styled.div`
    width: 100%;
    height: 5px;
    background-color: #59371c;
    margin-bottom: 70px;
`
export const Div = styled.div`
    margin-bottom: 50px;
`
export const QuebraDeLinha = styled.br`
`
export const H1 = styled.h1`
    color: #eb9c20;
    margin-bottom: 20px;
    font-family: sans-serif;
`


