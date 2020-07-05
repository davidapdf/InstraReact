import React, { Component, useState } from 'react';
import {View,Button,TextInput} from 'react-native';
import {init, insertPessoa, findAllPessoas, insertUsuario, findUserById, findPersonById} from '../dataBase/sqlite';


const TelaCadastro = props =>{
    [nome, setNome] = useState('');
    [dataNascimento, setDataNascimento] = useState('');
    [peso, setPeso] = useState('');
    [altura, setAltura] = useState('');
    [login, setLogin] = useState('');
    [senha, setSenha] = useState('');



    return(
        <View style= {{flex: 1, flexDirection: 'column'}}>
            <View style = {{flex: 1, flexDirection: 'column', alignItems:'center'}}>
                <TextInput placeholder ='Nome'
                    onChangeText = {
                        text => setNome(text)}
                />
                <TextInput placeholder ='Data de Nascimento'
                    onChangeText = {
                        text => setDataNascimento(text)}
                />
                <TextInput placeholder ='Peso'
                    onChangeText = {
                        text => setPeso(text)}
                />
                <TextInput placeholder ='Altura'
                    onChangeText = {
                        text => setAltura(text)}
                />
                <TextInput placeholder ='Login'
                    onChangeText = {
                        text => setLogin(text)}
                />
                <TextInput placeholder ='Senha'
                    onChangeText = {
                        text => setSenha(text)}
                />
            </View>
        <View style = {{flex: 1, flexDirection: 'column', alignContent:'center',justifyContent:'space-around'}}> 
                <Button title ="Cadastrar" type ="outline"
                    onPress={async ()=>{
                        console.log("Nome inserido: " + nome);
                        console.log("Data de Nacimento inserido: " + dataNascimento);
                        console.log("Peso inserido: " + peso);
                        console.log("Altura inserido: " + altura);
                        console.log("Login inserido: " + login);
                        console.log("senha inserido: " + senha);
                        
                        let resInsertPessoa = await insertPessoa(nome,dataNascimento,peso,altura);
                        let resInsertUsuario = await insertUsuario(login,senha, resInsertPessoa.insertId);

                        console.log("Resultado da inserção da pessoa",resInsertPessoa.insertId)
                        console.log("Resultado da inserção do usuário",resInsertUsuario)
                        
                        props.navigation.navigate('Screen1')   
                    }}/>
                    
        </View>         
        
        </View>
    );
}
export default TelaCadastro