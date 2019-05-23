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

const button = document.getElementById('mulheres-maravilhosas-cadastro');

button.addEventListener('click', (evento) => {
    evento.preventDefault();

    const nome = document.getElementsByName("nome").value;
    const endereco = document.getElementsByName("imagem").value;

    fetch('http://localhost:5001/maravilhosas/',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'nome': nome,
            'endereco': endereco,
        })

    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById("message").textContent = "Sucesso!! :)"
    })
    .catch((erro) => {
        console.log(erro)
    })


})