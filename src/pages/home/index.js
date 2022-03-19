import React from "react";
import Sobre from "../../components/sobre";
import "./stylo.css";
export default function Home(){
    return(
            
        <section className="container ">
            
            <div class="jumbotron card card-image mb-5"  id="jumbo">
                <div class="text-white text-center py-4 px-5">
                    <div>
                        <h2 class="card-title h1-responsive pt-4 mb-4 font-bold"><strong>Bem vindo a GoodTrip</strong></h2>
                        <p class="text-white mx-2 mb-2">Sua melhor experiência com viagens aéreas!</p>
                        <p class="text-white mx-2 mb-2">Confira nossas promoções! temos os melhores com os melhores destinos</p>
                        <a class="btn btn-warning btn-lg shadow-lg mb-5 rounded" href="http://localhost:3000/Promocoes">
                            Promoções
                        </a>
                    </div>
                </div>
            </div>
            <h2 class="text-center">Viagens em destaque</h2>
            <div class="containers p-4">
                <div class="row">
                    <div class="col-4">
                        <div class="card">
                            <img class="card-img-top" src="https://i.imgur.com/9e5kGL5.jpg" alt="Ilhas maldivas" />
                            <div class="card-body">
                                <h3>Rio de Janeiro</h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="card">
                            <img class="card-img-top" src="https://i.imgur.com/oZE7B9y.jpg" alt="NY" />
                            <div class="card-body">
                                <h3>São Paulo</h3>
                            </div>
                        </div>
                    </div>

                    <div class="col-4">
                        <div class="card">
                            <img class="card-img-top" src="https://i.imgur.com/LrpLcQo.jpg" alt="Holanda" />
                            <div class="card-body">
                                <h3>Bahia</h3>                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Sobre/>

        </section>
    )
}

