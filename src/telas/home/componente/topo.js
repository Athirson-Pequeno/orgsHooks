import React from "react";
import {Text, View, Image, StyleSheet} from 'react-native';
import logo from '../../../assets/logo.png'
import { carregaTopo } from "../../../servicos/carregaDados";

class Topo extends React.Component{

    //o metodo state serve para atualizar uma variavel
    //deve-se declarar antes de ser chamado para evitar conflitos
    state = {
        topo:{
            //esse construtor tambem serve para se estabelecer um valor padrao
            boasVindas:'',
            legenda:'',
        }
    }

    atualizaTopo(){
        const retorno = carregaTopo();
        //quando a gente seta que o topo é igual o retorno a gente só altera o topo
        this.setState({topo:retorno})
    }


/*  componentDidMount:  é executado quando o componente termina de renderizar;
    componentDidUpdate: que é executado quando o componente recebe alguma atualização e não é executado na primeira vez que o componente carrega;
    componentWillUnmount: que é executado quando o componente é removido da tela;
    componentDidCatch: que é chamado quando a aplicação encontra algum erro durante a renderização, em algum método do ciclo de vida ou no construtor de componentes filhos.*/

    componentDidMount(){
        this.atualizaTopo();
    }

    render() {
        return <View style={estilos.topo}>
                <Image style={estilos.imagem} source={logo}/>
                <Text style={estilos.boasVindas}>{ this.state.topo.boasVindas }</Text>
                <Text style={estilos.legenda}>{ this.state.topo.legendas }</Text>
            </View>
    }
}


const estilos = StyleSheet.create({
    topo:{
        backgroundColor:"#F6F6F6",
        padding:16
    },imagem:{
        width:70,
        height:28
    },boasVindas:{
        marginTop:24,
        fontSize:26,
        lineHeight:42,
        fontWeight:"bold",
        color:"#464646"
    },legenda:{
        fontSize:16,
        lineHeight:26,
        color: "#a3a3a3",
    }
});

export default Topo;