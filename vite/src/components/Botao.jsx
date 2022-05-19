import React from "react";

const botao = ({texto,cor}) =>{
    const colors ={
        vermelho:'red',
        verde: 'green',
        amarelo:'yellow',
        rosa: 'pink',
        azul: 'blue'
    }
    return(
        <button style = {{background:colors[cor]}}>{texto}</button>
    )
}
export default botao