import React from "react";
import "../hojas-de-estilo/Tarea.css"
import {  AiFillCloseSquare } from "react-icons/ai";

function Tarea({ id, texto, Completada, completarTarea, eliminarTarea }){
    return(
        <div className={Completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div 
            className="tarea-texto"
            onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className="tarea-contenedor-iconos"
            onClick={() => eliminarTarea(id)}>
                <AiFillCloseSquare className="tarea-icono"/>
            </div>
        </div>
    )
}
export default Tarea