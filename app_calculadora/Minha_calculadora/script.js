
       
function calcular(tipo, valor){
    if (tipo === 'acao'){
        if (valor === 'c'){
            //limpar visor
            document.getElementById('isaida').value = ''
        }
        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            document.getElementById('isaida').value += valor
        }
        if (valor === '='){
            let valorCampo = eval(document.getElementById('isaida').value)

            //sobreposição do valor
            document.getElementById('isaida').value = valorCampo
        }
    } else if (tipo === 'valor'){
        document.getElementById('isaida').value += valor
    }
}


