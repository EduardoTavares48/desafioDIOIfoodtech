console.log('Desafio classificador de nível de herói')

let nomeDoHeroi = 'Eduardo'
let nivelDoHeroi = 5500

if (nivelDoHeroi < 1000) {
    console.log(`O herói de nome ${nomeDoHeroi} está no nível Ferro`)
} else if (nivelDoHeroi >= 1001 && nivelDoHeroi <= 2000) {
    console.log(`O herói de nome ${nomeDoHeroi} está no nível Bronze`)
} else if (nivelDoHeroi >= 2001 && nivelDoHeroi <= 5000) {
    console.log(`O herói de nome ${nomeDoHeroi} está no nível Prata`)
} else if (nivelDoHeroi >= 5001 && nivelDoHeroi <= 7000) {
    console.log(`O herói de nome ${nomeDoHeroi} está no nível Ouro`)
} else if (nivelDoHeroi >= 7001 && nivelDoHeroi <= 8000) {
    console.log(`O herói de nome ${nomeDoHeroi} está no nível Platina`)
} else if (nivelDoHeroi >= 8001 && nivelDoHeroi <= 9000) {
    console.log(`O herói de nome ${nomeDoHeroi} está no nível Ascendente`)
} else if (nivelDoHeroi >= 9001 && nivelDoHeroi <= 10000) {
    console.log(`O herói de nome ${nomeDoHeroi} está no nível Imortal`)
} else if (nivelDoHeroi >= 10001) {
    console.log(`O herói de nome ${nomeDoHeroi} está no nível Radiante`)
} else {
    console.log("Nível de herói inexistente")
}
