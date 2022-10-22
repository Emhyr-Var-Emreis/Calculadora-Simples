/*function testi(){
    const teste = document.getElementById('T');
    //console.log(teste);
    //console.log(teste.innerText);
    teste.style = "background-color: yellow;"
    teste.innerText = "tchau";
}*/


function calcular(){
    let valor1 = Number(document.getElementById('valor1').value);
    let valor2 = Number(document.getElementById('valor2').value);
    const resultado = document.getElementById('resultado');
    const departamento = document.getElementById('departamento');
    if(departamento.value == "1"){
        const op = valor1 + valor2;
        console.log(".");
        console.log(op);
        resultado.value = Number(op);
    }
    else if(departamento.value == "2"){
        const op = valor1 - valor2;
        resultado.value = Number(op);
    }
    else if(departamento.value == "3"){
        const op = valor1 / valor2;
        resultado.value = Number(op);
    }
    else if(departamento.value == "4"){
        const op = valor1 * valor2;
        resultado.value = Number(op);
    }
}