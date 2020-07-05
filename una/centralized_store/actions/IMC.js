export const alterouPeso = "Alterou_Peso"
export const alterouAltura = "Alterou_Altura"
export const marcouMaior60 = "Marcou_Maior_60"
export const calculoIMC = "Calculo_IMC"


export const calculouIMC = () =>{
    return {type:calculoIMC}
}
export const alteracaoPeso = (valor) =>{

    return {type:alterouPeso, texto:valor}
}

export const alteracaoAltura = (valor) =>{
    return {type:alterouAltura, texto:valor}
}

export const marcacaoMaior60 = (valor) =>{
    return {type:marcouMaior60, texto:valor}
}
