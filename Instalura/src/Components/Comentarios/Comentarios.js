import React,{Fragment, useState, useEffect} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableOpacity
} from "react-native"
import estilo from './estilo';


const Comentarios = ({comentarios}) => {
    const [estComentarios,setComentarios] = useState(comentarios);


    const adicionarComentario =() =>{
        console.warn(conteudoCampoInput);
        campoInput.clear();
        const novoComentario = {
            date: Date.now(),
            text: conteudoCampoInput,
            userName: "David" 
        }
        setComentarios([...estComentarios,novoComentario]);
    }
    let campoInput;
    let conteudoCampoInput = "";
    return(
        <Fragment>
            <FlatList
                data={estComentarios}
                keyExtractor={(item,index) => index.toString()}
                renderItem={({item}) =>
                <View>
                    <Text>{item.userName}</Text>
                    <Text>{item.text}</Text>
                </View>
                }
                />
        <View style={estilo.naMesmaLinha}>
            <TextInput
            ref={TextInput => campoInput = TextInput}
            onChangeText={texto => conteudoCampoInput = texto}
            placeholder={"Deixe seu comentário..."}
            style={{flex:1}}/>
            <TouchableOpacity onPress={adicionarComentario}>
                <Image source={require("../../../res/img/send.png")}
                style={estilo.imgSend}/>
            </TouchableOpacity>
        </View>    
        </Fragment>

    )
};
export default Comentarios