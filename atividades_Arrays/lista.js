let lista_objeto = Array() //Não colocar o array dentro da função

function adicionarObjeto(){

    let item = document.getElementById('iobjeto').value
    
    let lista = document.getElementById('lista')

    if (item != '') {
        if (lista_objeto.indexOf(item) !== -1){
            
            document.getElementById('iobjeto').style.backgroundColor = 'red'
            
            document.getElementById('iobjeto').value = ''

            document.getElementById('iobjeto').style.backgroundColor = ''

        } else {
            let lista_itens = document.createElement('li')
            
            lista_objeto.push(item)

            document.getElementById('iobjeto').value = ''
            
            lista.appendChild(lista_itens)

            lista_itens.innerHTML = `${item}`

            document.getElementById('iobjeto').value = ''

            document.getElementById('iobjeto').value = 'Adicionado'

        }
    } else {

        document.getElementById('iobjeto').value = 'Informe um objeto válido'

        document.getElementById('iobjeto').style.backgroundColor = 'red'
  
    }
              
}

document.getElementById('iobjeto').addEventListener('mouseout', () => {
        document.getElementById('iobjeto').value = ''
})

function ordenarObjeto(){
    
    for (c in lista_objeto){
        
        let lista = document.getElementById('lista')

        let lista_itens = document.createElement('p')

        lista.appendChild(lista_itens)

        lista_objeto.sort()

        lista_itens.innerHTML = `${lista_objeto[c]}`

    }

    
}

  
function ordenarObjetos() { 
        objetos.sort() 
        console.log(objetos) 
} 