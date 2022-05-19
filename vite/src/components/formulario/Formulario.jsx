import React from "react";
import styles from './Formulario.module.css'
const  formulario = ({titulo}) =>{
    return(
        <form className={styles.form}> 
            <h2 className={styles.titulo}>{titulo}</h2>
            <fieldset>
                <label>nome:</label>
                <input type = "text"/>
            </fieldset>
            <fieldset>
                <label>Email:</label>
                <input type = "email"/>
            </fieldset>
            <fieldset>
                <label>mensagem:</label>
               <textarea></textarea>
            </fieldset>
            <button type="submit" className={styles.btn}>Enviar</button>
        </form>
    )
}
export default formulario