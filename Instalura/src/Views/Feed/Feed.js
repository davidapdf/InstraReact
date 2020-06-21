import React,{Fragment,useState, useEffect} from 'react';
import {
  FlatList,
  StatusBar,
  Platform,
  ScrollView
} from "react-native"
import {Cabecalho} from '../../Components/Cabecalho';
import {Foto} from '../../Components/Cabecalho/Foto';
import lerFotos from '../../api/feed';
import { Comentarios } from '../../Components/Comentarios';
import { curtirFoto, imgLike } from '../../api/curtidas';
import adicionarComentario from '../../api/comentario'

const Feed = () => {
  const [fotos,setFotos] = useState([])
  useEffect(()=>{
    lerFotos(setFotos);
  },[])
 
  return (
    <ScrollView>
      <StatusBar 
        backgroundColor="white"
        barStyle="dark-content"/>
      <FlatList
        data={fotos}
        keyExtractor={(index) => index.id.toString()}
        renderItem={({item})=>
          <Fragment>
            <Cabecalho 
              nomeUsuario = {item.userName}
              urlImage={item.userURL}/>
            <Foto urlFoto={item.url}
              descricao ={item.description}
              qntLikes={item.likes}
              imgLike ={imgLike}
              curtirFoto={curtirFoto}
              />
            <Comentarios 
              comentarios={item.comentarios}
              adicionarComentario={adicionarComentario}/>
        </Fragment>}
      />
    </ScrollView>
  )
};

Feed.navigationOptions =({navigation}) =>{
  const opcoes ={
    title:navigation.getParam("nome")
  }
  if(Platform.OS=="android"){
    opcoes.header = null
  }
  return opcoes
}


export default Feed;
