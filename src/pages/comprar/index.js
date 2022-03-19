import React from "react";
import Form from 'react-bootstrap/Form'


function Comprar() {
    return (

        <div class="col-md-4 text-center">
            <form asp-action="Create">
                <div asp-validation-summary="ModelOnly" class="text-danger"></div>
                <div class="form-group">
                    <label asp-for="Nome" class="control-label">Nome</label>
                    <input asp-for="Nome" class="form-control" />
                    <span asp-validation-for="Nome" class="text-danger"></span>
                </div>
                <div class="form-group">
                    <label asp-for="Sobrenome" class="control-label">Sobrenome</label>
                    <input asp-for="Sobrenome" class="form-control" />
                    <span asp-validation-for="Sobrenome" class="text-danger"></span>
                </div>
                <div class="form-group">
                    <label asp-for="Text" class="control-label">Cpf</label>
                    <input asp-for="Email" class="form-control" />
                    <span asp-validation-for="Email" class="text-danger"></span>
                </div>
                <br />
                <div class="form-group">
                    <input type="submit" value="Cadastrar" class="btn btn-primary" />
                </div>
            </form>
        </div>


    )
}


export default Comprar;