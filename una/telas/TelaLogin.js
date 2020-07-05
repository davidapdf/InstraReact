import React, {Component} from 'react';
import {View,Button,TextInput} from 'react-native';

const TelaLogin = props =>{

    return(
        <View>
            <TextInput placeholder ='Login'/>
            <TextInput placeholder ='Senha'/>
            <Button title="login" type ="outline"
                onPress={()=>{
                    props.navigation.navigate('Screen1')
                }}/>
            <Button title ="Cadastrar" type ="outline"
                    onPress={()=>{
                        props.navigation.navigate('Tela_Cadastro')}}/>
        </View>
    );
}
export default TelaLogin