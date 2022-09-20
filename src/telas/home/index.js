import React from "react";
import Topo from "./componente/topo"
import Produtores from "./componente/produtores";


export default function Home(){
    return  <Produtores topo={Topo}/>
           
}