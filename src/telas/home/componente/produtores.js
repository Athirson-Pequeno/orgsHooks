import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import { carregaProdutores } from "../../../servicos/carregaDados";
import Produtor from "./produtor";


export default function Produtores({ topo: Topo }){

    //estrutura
    //nome do estado - metodo que vai alterar esse titulo
    //sempre chamar o useState no começo da função
    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    //no usEffect quando o segundo parametro é um array vazio oq esta no primeiro parametro vai ser executado apenas quando o componente dor carregadpo
    useEffect(()=>{
        const retorno = carregaProdutores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);
    },[]);

const TopoLista = () => { return <>
                        <Topo/>
                        <Text style={estilos.titulo}>{titulo}</Text></>}

    return <FlatList
    backgroundColor="#a1a1a1"
    data={lista}
    renderItem={({ item }) => <Produtor {...item}/>}
    keyExtractor={({nome}) => nome}
    ListHeaderComponent={TopoLista}/>
}


const estilos = StyleSheet.create({
    titulo:{
        fontSize:20,
        lineHeight:32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: "bold",
        color: "#464646"
    }, item:{
        backgroundColor:"#fff",
        marginVertical:12,
        fontSize:18
    }
})