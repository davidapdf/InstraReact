import React, { Fragment,useState } from 'react';
import{
Text,
TextInput,
Button,
View,
Platform,
//AsyncStorage
} from "react-native";
import estilo from './estilo';
import efetuarLogin from '../../api/login'
import AsyncStorage from "@react-native-community/async-storage"



const Login = ({navigation}) => {
  const[usuario,setUsuario] = useState("");
  const[senha,setSenha]= useState("");
  const[mensagemErro,setmensagemErro]=useState("")



  const tentarLogar = async ()=>{
    try{
      const token =  await efetuarLogin(usuario,senha);
      await AsyncStorage.setItem("instalura_token",token);
      navigation.replace("Feed",{nome : usuario})

    }catch(erro){
      setmensagemErro(erro.message)
    }
  }


  return (
    <Fragment>
      <View style={estilo.conteriner}>
        <TextInput
          style={estilo.inputs}
          placeholder="Usuario"
          onChangeText={texto => setUsuario(texto)}
        />
        <TextInput
          style={estilo.inputs}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={texto => setSenha(texto)}
        />
        <Text style={estilo.erro}>
          {mensagemErro}
        </Text>
        <Button 
          style={estilo.button}
          title="Entrar"
          onPress={tentarLogar}
          />
      </View>
    </Fragment>
  )
};

Login.navigationOptions =() =>{
  const opcoes ={
    title:"Login"
  }
  if(Platform.OS=="android"){
    opcoes.header = null
  }
  return opcoes
}

export default Login;
