let numero1 = 18
let numero2 = 20

function soma(a, b) {
    console.log(a + b);
}

soma(numero1, numero2);
let numeroVerificacao =3

function parOuImpar(numeroVerificacao) {
    if (numeroVerificacao % 2 === 0) {
        console.log("O numero e par " + numeroVerificacao);

    } else {
        console.log("O numero e impar " + numeroVerificacao);
    }
}

parOuImpar(numeroVerificacao);




for (let i = 0; i < 10; i++) {
    console.log(i);
}


let soma = 0 
let contador = 1 

while (contador <= 100){
    soma += contador;
}






let x = 1

do{
    console.log( "executando pela primeira vez" + x);
    x++
}while(x <= 10)