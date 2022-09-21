import { useState, useEffect } from "react";
import { carregaProdutores } from "../servicos/carregaDados";

export default function useProdutores(){

    //estrutura
    //nome do estado - metodo que vai alterar esse titulo
    //sempre chamar o useState no começo da função

    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    //no usEffect quando o segundo parametro é um array vazio oq 
    //esta no primeiro parametro vai ser executado apenas quando
    //o componente estiver carregado
    useEffect(()=>{
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    },[]);


    return [titulo, lista];
}
