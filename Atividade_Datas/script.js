
function calcule(){
    let numero = Number(document.getElementById('inumero').value)
    //Recebe o primeiro valor
    let operador = document.getElementById('ioperador').value
    //Manipula o operador aritmético
    let numero2 = Number(document.getElementById('inumero2').value)
    //Recebe o segundo valor
    let resultado = document.getElementById('res')
    //Informa o resultado
    let p = document.createElement('p')
    //Cria um parágrafo para informar o resultado
 
    if(operador === 'somar'){
        p.textContent = `A soma de ${numero} e ${numero2} é ${numero + numero2}`
        p.setAttribute('id', 'paragrafo')
    }else if(operador === 'subtrair'){
        p.textContent = `A subtração de ${numero} e ${numero2} é ${numero - numero2}`
        p.setAttribute('id', 'paragrafo')
    }resultado.appendChild(p)


}


