import React from 'react'
import CartWidget from '../ItemListContainer/CartWidget'
import {Link} from "react-router-dom";



function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="">Rompecabezas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="">GPS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="">Tableros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="recursos" href="">Libros</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="">Peluches</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="">Celulares</a>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget/>
        </nav>
  )
}

export default NavBar