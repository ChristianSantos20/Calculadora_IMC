//Mascara do KG
function KG_mask(k){
    k=k.replace(/\D/g,"")
    k=k.replace(/^(\d{2})(\d{2})/,"$1,$2")
    return k;
}
//Mascara da altura
function Altura_Mask(a){
    a=a.replace(/\D/g,"");
    a=a.replace(/^(\d{2})(\d{2})/,"$1.$2");
    return a;
} 
//Função para calcular o IMC
function Calcular(){

    let KG = Number(document.getElementById("Kg_input").value)
    let Altura = Number(document.getElementById("Altura_input").value)
    let resultado = document.getElementById("resultado")
     
    const IMC = KG / (Altura * Altura)
    
    if(IMC < 18){
        resultado.innerHTML("Abaixo do peso")
    } else if(IMC > 18 && IMC < 24){
        resultado.innerHTML("Peso normal")
    } else if(IMC > 25 && IMC < 29){
        resultado.innerHTML("Execesso de peso")
    } else if(IMC > 29 && IMC < 34){
        resultado.innerHTML("Obesidade classe I")
    } else if(IMC > 34 && IMC < 39){
        resultado.innerHTML("Obesidade classe II")
    } else {
        resultado.innerHTML("Obesidade classe III")
    }

    //return resultado;
}