let idade = prompt("Qual a sua idade: ");

if(idade <= 18){
    console.log("Voce e menor de idade");
}else if(idade >= 18 && idade <= 60){
    console.log("Voce maior de idade");
}else if(idade > 60){
    console.log("Voce e idoso");
}else{
    console.log("Idade invalida");
}