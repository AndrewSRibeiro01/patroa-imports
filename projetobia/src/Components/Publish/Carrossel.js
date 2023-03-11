import React from "react"
import { Imagem } from "../../Estilizações/EMain"
import { Link } from "react-router-dom"
export const Carrossel = () => {



    return (

        <div id="carouselExampleIndicators" class="carousel slide">

            <div class="carousel-indicators" style={{ marginBottom: "0px" }}>

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" />

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />

                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />

            </div>


            <div class="carousel-inner">

                <div class="carousel-item active">

                    <Link to="/Anuncio/11" style={{ textDecoration: "none", color: "black" }}>

                        <Imagem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZI0SE2RpZylR53qfF-poSOECbz65x2ny_OA&usqp=CAU" class="d-block w-100" alt="Camisa" style={{ border: "solid #eb9c20" }} />

                        <Imagem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVUQxPmHRZLmY8i29IypOMPlB0CMA5X4Ndg&usqp=CAU" style={{ width: "300px", height: "300px", border: "solid #eb9c20" }} class="d-block w-100" alt="Camisa" />

                        <Imagem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimtthLVSYDk0GpGwoXeqEvoozHNLA8uwLOw&usqp=CAU" class="d-block w-100" alt="..." style={{ border: "solid #eb9c20" }} />
                        <br /> <br />
                    </Link>
                </div>

                <div class="carousel-item">

                    <a to="/Anuncio/2" style={{ textDecoration: "none", color: "black" }}>

                        <Imagem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVUQxPmHRZLmY8i29IypOMPlB0CMA5X4Ndg&usqp=CAU" style={{ width: "300px", height: "300px" }} class="d-block w-100" alt="..." />

                        <br /> <br />
                    </a>
                </div>

                <div class="carousel-item">
                    <a to="/Anuncio/3" style={{ textDecoration: "none", color: "black" }}>
                        <Imagem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimtthLVSYDk0GpGwoXeqEvoozHNLA8uwLOw&usqp=CAU" class="d-block w-100" alt="..." />

                        <br /> <br />

                    </a>

                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}