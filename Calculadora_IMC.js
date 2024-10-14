//Mascara do KG
function KG_mask(k){

    let Kg_valor = k.value

    Kg_valor = Kg_valor.replace(/\D/g,"");

    if(Kg_valor.length === 2){
       Kg_valor.replace(/^(\d{2})(\d{0,3})/,"$1,$2");
    }
    
    k.value = Kg_valor;

}
//Mascara da altura
function Altura_Mask(a){

    let Altura_valor = a.value;
    Altura_valor = Altura_valor.replace(/\D/g,"");

    if(Altura_valor.length === 1){
        Altura_valor.replace(/^(\d{1})(\d{0,3})/,"$1.$2")
    };
   
    a.value = Altura_valor;
    
} 
//Função para calcular o IMC
function Calcular(){

    let KG = Number(document.getElementById("Kg_input").value)
    let Altura = Number(document.getElementById("Altura_input").value)
    let resultado = document.getElementById("resultado")
    
    if(KG === "" || Altura === ""){
        alert("Preencha os campos vazios");
        return;
    } 

    const IMC = KG / (Altura * Altura);

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

        return resultado;
        

}
