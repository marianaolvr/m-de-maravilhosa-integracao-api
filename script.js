const box = document.querySelector(".maravilhosas__box");


fetch('http://localhost:5001/maravilhosas/')

.then((response) =>{
    return response.json();
})
.then((data) => {
    data.content.forEach(mulher =>{

        let perfil = document.createElement('div');
        perfil.setAttribute('class', 'maravilhosas__perfil');
        box.appendChild(perfil);
        
        let link = document.createElement('a');
        link.href = '#!';
        perfil.appendChild(link);

        // let imagem = document.createElement('img');
        // imagem.setAttribute('class', 'img-responsive');
        // imagem.src = '#!';
        // link.appendChild(imagem);

        let nome = document.createElement('p');
        nome.innerHTML = mulher.title;
        link.appendChild(nome);

        let botao = document.createElement('button');
        link.appendChild(botao);
        botao.textContent = "Deletar"

        let image = document.createElement('img');
        image.setAttribute('class', 'img-responsive');
        nome.appendChild(image);

        if(mulher.metadata && mulher.metadata.image){
            image.setAttribute('src', mulher.metadata.image.url);
                        }
                        else{
                            image.setAttribute('src', './img/img-mulher.png');
                        }     
    })
    

})
.catch((erro) => {
    console.log(erro);
})

const button = document.getElementById('button');

button.addEventListener('click', (evento) => {
    evento.preventDefault();

    const nome = document.getElementById('nome').value; //.value é porque está
    const endereco = document.getElementById('endereco').value;
    console.log(nome, endereco)

    fetch('http://localhost:5001/maravilhosas/',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': nome,
            'metadata':{'image':{'url': endereco
            
        }
    }
                
        })

    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log('Sucesso');
    })
    .catch((erro) => {
        console.log(erro)
    })

    window.location.reload(true)

    })


    



