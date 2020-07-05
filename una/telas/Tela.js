import React, {Component,useState} from 'react';
import {View,Button,TextInput,Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Tela = props =>{
const [idoso, setIdoso] = useState(false)
const [adulto, setAdulto] = useState(false)


    return(
        <View style = {{flex: 1, flexDirection: 'column'}} > 
            <View style = {{flex: 1, flexDirection: 'column', alignItems:'center'}}>
                <TextInput placeholder ='Peso'/>
                <TextInput placeholder ='Altura'/>
                <TextInput placeholder ='Idade'/>
            </View>
                    <View style = {{flex: 0, flexDirection: 'row',alignContent:'center' ,justifyContent:'space-evenly'}}> 
                        <CheckBox 
                        value={idoso}
                        onValueChange={setIdoso}
                        />
                        <Text>Idoso   (Maior  65)</Text>
                    </View>
                    <View style = {{flex: 0, flexDirection: 'row',alignContent:'center' ,justifyContent:'space-evenly'}}> 
                        <CheckBox 
                        value={adulto}
                        onValueChange={setAdulto}
                        />
                        <Text>Adulto (Menor 65)</Text>
                    </View>
            <View style = {{flex: 1, flexDirection: 'column',alignItems:'center' ,justifyContent:'space-evenly'}}>
                <Button title ="Calcular" type ="outline"/>
                <Button title ="Histórico" type ="outline"/>
            </View>
        </View>
    );
}
export default Tela;