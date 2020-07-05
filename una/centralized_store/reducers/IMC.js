const estadoInicial = { peso: '', altura: '', maior60: false, IMC: 0, faixaIMC: '' };

import { alterouAltura, alterouPeso, marcouMaior60, calculoIMC } from '../actions/IMC';

const reducerIMC = (state = estadoInicial, action) =>{

   switch (action.type) {
        case alterouAltura:
            console.log("Action que chegou para alteração de altura", action)
            return { peso: state.peso, altura: action.texto, maior60: state.maior60 }
        case alterouPeso:
            console.log("Action que chegou para alteração de peso", action)
            return { peso: action.texto, altura: state.altura, maior60: state.maior60 }
        case marcouMaior60:
            console.log("Action que chegou alteração da marcação", action)
            return { peso: state.peso, altura: state.altura, maior60: action.texto }



        case calculoIMC:
            console.log("Action que chegou para calcular imc ", action)

            return {

                peso: state.peso,
                altura: state.altura,
                maior60: state.altura,
                IMC: (Number(state.peso) / (Number(state.altura) * Number(state.altura))),
                faixaIMC: calculaFaixaIMC((Number(state.peso) / (Number(state.altura) * Number(state.altura))))

            }
        default:
            return state;
    }
}

async function calculaFaixaIMC(resultadoIMC) {

    if (resultadoIMC < 18.5 && estadoInicial.maior60 == false) {
        return "Faixa1";
    }
    else if ((resultadoIMC >= 18.5 && resultadoIMC < 24.9) && estadoInicial.maior60 == false) {
        return "Faixa2";
    }
    else if ((resultadoIMC >= 24.9 && resultadoIMC < 29.9) && estadoInicial.maior60 == false) {
        return "Faixa3";
    }
    else if (resultadoIMC >= 29, 9 && estadoInicial.maior60 == false) {
        return "Faixa4";
    }
}

export default reducerIMC;