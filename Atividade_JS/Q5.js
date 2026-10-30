let dia = prompt("Digite o dia da semana ex(1=domingo, 2=segunda, 3=terca, 4=quarta, 5=quinta, 6=sexta, 7=sabado): ");

switch (dia) {
    case "1":
        console.log("Domingo");
        break;
    case "2":
        console.log("Segunda-feira");
        break;
    case "3":
        console.log("Terça-feira");
        break;
    case "4":
        console.log("Quarta-feira");
        break;
    case "5":
        console.log("Quinta-feira");
        break;
    case "6":
        console.log("Sexta-feira");
        break;
    case "7":
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
}