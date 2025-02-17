let texto = document.getElementById('iname')
let imagem = document.getElementById('img')

let personagem = document.createElement('img')


function cliquei(){
    let escolha = texto.value
    if (texto.value === ''){
        imagem.innerHTML = 'Informe um personagem.'
    } else {
        if (escolha == 'Vegeta'){
            personagem.setAttribute("src", "vegeta.webp")
            imagem.innerHTML += `Este sou eu, Inseto!`
        } else if (escolha == 'Goku'){
            personagem.setAttribute("src", "goku.webp")
            imagem.innerHTML += `Oi, eu sou o Goku!`
        } else {
            imagem.innerHTML = 'Personagem não encontrado.'
        }

    }
    
}

imagem.appendChild(personagem)