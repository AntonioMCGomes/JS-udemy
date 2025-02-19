let nome = document.getElementById('inome')
let altura = document.getElementById(Number('ialtura'))
let peso = document.getElementById(Number('ipeso'))
let resultado = document.getElementById('res')

function calcular() {
    altura /= 100
    let classificacao = null
    let massa = peso / altura
    if ( massa < 16) {
       classificacao = `Baixo peso grave`
    }
}

resultado.innerHTML = ` ${nome} possui índice de massa corporal igual a ${massa}, sendo classificado como: ${classificacao}. `

alert('Oi')