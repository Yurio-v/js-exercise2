var nota1 = 9
var nota2 = 10
var nota3 = 9
var nota4 = 9


var media = (nota1 + nota2 + nota3 + nota4) / 4

var conceito = ""

if( media >=6){
    console.log("aprovado")
    conceito = "Bom desempenho"



}else if( media < 6){
    console.log("você está de recuperação")
    conceito = "Ruim desempenho"


}else{
    console.log("está reprovado")
    conceito="péssimo"


}

switch(conceito){


    case "Bom desempenho":
        console.log(`ótimo aluno, sua nota é ${media}`)
        break

    case "Ruim desempenho":
        console.log(`situação em analise sua nota é ${media}`)
        break

    case "péssimo":
        console.log(`estude mais no próximo ano sua média é ${media}`)
        break
    


}