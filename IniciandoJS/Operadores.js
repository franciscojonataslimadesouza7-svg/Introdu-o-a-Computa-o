let divisao = 10 / 2;
if (divisao !== 0 ) {
    console.log("A divisao e diferente de zero" + divisao);
} else {
    console.log("A divisao e igual a zero" + divisao);
}





let numero1 = 5; 
let numero2 = "5";

if (numero1 === numero2) {
    console.log(`O ${numero1} e igual a ${numero2}`);
}else{
    console.log(`O ${numero1} e diferente de ${numero2}`);
}



let sextaFeriado = true;
let sabadoFeriado = false;

if(sextaFeriado === true || sabadoFeriado === true){
    console.log("Eu vou viajar");
}else{
    console.log("Eu vou ficar em casa");
}






let nome = prompt("Qual e o seu nome?");

switch (nome) {
    case "Jonatas":
        console.log("Ola Jonatas");
        break;
    case "Maria":
        console.log("Ola Maria");
        break;
    default:
        console.log("Ola, seja bem vindo");
        break;
}

