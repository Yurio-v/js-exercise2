var nome = "joana"
var sexo = "f"
var idade = 17
var musica = "luan santana"
var lider = "verdadeiro"
var nota = 7

var sobre = lider== "verdadeiro"? true:false


if(idade >=18){
    console.log(` ${nome}, você já pode beber conosco `)

}else{
    console.log(`Sinto muito ${nome}, infelizmente não poderá beber conosco`)
}

console.log(`${nome} possui ${idade} anos, gosta de ouvir ${musica} e é lider (${sobre})`)

