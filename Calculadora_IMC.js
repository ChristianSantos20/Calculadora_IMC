let formulario_calculos = document.getElementById("Calculos_div");

formulario_calculos.addEventListener("submit", function(i){
    i.preventDefault()
    let kg = document.getElementById("Kg_input");
    let Altura = document.getElementById("Altura_input");
    let resultado = document.getElementById("resultado");
  
    if(kg.value === ""){
        resultado.innerHTML = "Preencha os campos vazios";
        kg.focus();
        return; 
    };

    if(Altura.value === ""){
        resultado.innerHTML = "Preencha os campos vazios";
        Altura.focus();
        return;
    };

    formulario_calculos.submit();
    
})