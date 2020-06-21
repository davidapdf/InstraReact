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


const Feed = () => {
  const [fotos,setFotos] = useState([])
  useEffect(()=>{
    lerFotos(setFotos);
  },[])
  let altura = 0;
  if(Platform.OS =="ios"){
    altura = 35;
  }
  return (
    <ScrollView style={{marginTop:altura}}>
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
              comentarios={item.comentarios}/>
        </Fragment>}
      />
    </ScrollView>
  )
};



export default Feed;
