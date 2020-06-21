import {StyleSheet,Dimensions} from "react-native"
const largura = Dimensions.get("screen").width

const estilo = StyleSheet.create ({
    conteriner:{
        flexGrow:2,
        justifyContent:"center",
        alignContent:"center"
    },
    inputs:{
        width:largura*0.8,
        textAlign:"center",
        marginTop:40,
        fontSize:30
    },
    button:{
        alignItems:"center",
        marginBottom:50
    },
    erro:{
        textAlign:"center",
    }
}
)
export default estilo