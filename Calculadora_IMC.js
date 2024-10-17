
function KG_mask(k) {
   let Kg_valor = k.value;
   Kg_valor = Kg_valor.replace(/\D/g, ""); 

   if (Kg_valor.length > 2) {
       Kg_valor = Kg_valor.replace(/^(\d{2})(\d{0,3})$/, "$1,$2"); 
   }

   k.value = Kg_valor;
}

function Altura_Mask(a) {
   let Altura_valor = a.value;
   Altura_valor = Altura_valor.replace(/\D/g, ""); 

   if (Altura_valor.length > 1) {
       Altura_valor = Altura_valor.replace(/^(\d{1})(\d{0,2})$/, "$1.$2"); 
   }

   a.value = Altura_valor;
}

function Calcular() {
   let KG = parseFloat(document.getElementById("Kg_input").value.replace(",", "."));
   let Altura = parseFloat(document.getElementById("Altura_input").value);
   let resultado = document.getElementById("resultado");

   
   if (isNaN(KG) || isNaN(Altura)) {
       resultado.innerHTML = "Valor inválido. Preencha todos os campos.";
       return;
   }

   const IMC = KG / (Altura * Altura);

   let mensagem = "";

   if (IMC < 18) {
       mensagem = "Abaixo do peso";
   } else if (IMC >= 18 && IMC < 25) {
       mensagem = "Peso normal";
   } else if (IMC >= 25 && IMC < 30) {
       mensagem = "Excesso de peso";
   } else if (IMC >= 30 && IMC < 35) {
       mensagem = "Obesidade classe I";
   } else if (IMC >= 35 && IMC < 40) {
       mensagem = "Obesidade classe II";
   } else {
       mensagem = "Obesidade classe III";
   }

   resultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)}. ${mensagem}`;
}
