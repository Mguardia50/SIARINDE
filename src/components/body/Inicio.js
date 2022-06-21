import React, { useState } from "react";
import "./inicio.css";


function Inicio(props) {
    
    const [productos] = useState(["Item 1", 'Item 2', 'Item 3'])
    return (
    
    <> 
    <body>
        <h1>BIENVENIDO A SIaRINDE</h1>
        <ul>
            {productos.map((item) => (<li>{item}</li>))}
        </ul>     
    </body> 
    
    </>
    
    )   
  }

  export default Inicio






