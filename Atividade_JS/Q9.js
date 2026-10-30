function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    return media;

    if (media >= 7) {
        console.log("Aprovado com media: " + media);
    }else if (media < 7) {
        console.log("Reprovado com media: " + media);
    }
}

calcularMedia(8, 7, 9);