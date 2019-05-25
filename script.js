//GET
const box = document.querySelector(".maravilhosas__box");

fetch('http://localhost:5001/maravilhosas/')

    .then((response) => {
        return response.json();
    })
    .then((data) => {
        data.content.forEach(mulher => {

            let perfil = document.createElement('div');
            perfil.setAttribute('class', 'maravilhosas__perfil');
            box.appendChild(perfil);

            let link = document.createElement('a');
            link.href = '#!';
            perfil.appendChild(link);

            let nome = document.createElement('p');
            nome.innerHTML = mulher.title;
            link.appendChild(nome);

            let botao = document.createElement('button');
            botao.setAttribute('data-id', mulher.id);
            link.appendChild(botao);
            botao.textContent = "Deletar"

            let image = document.createElement('img');
            image.setAttribute('class', 'img-responsive');
            nome.appendChild(image);

            if (mulher.metadata && mulher.metadata.image) {
                image.setAttribute('src', mulher.metadata.image.url);
            }
            else {
                image.setAttribute('src', './img/img-mulher.png');
            }

            botao.addEventListener('click', () => {

                fetch(`http://localhost:5001/maravilhosas/${mulher.id}`, { //+mulher.id
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    // body: JSON.stringify({
                    //     'id': botao.getAttribute("data-id")
                    // })
                })
                    .then(data => {
                        console.log(data)
                        box.removeChild(perfil)
                    })
                    .catch((erro) => {
                        console.log(erro);

                    })
            })
    })
})
    .catch((erro) => {
        console.log(erro);
    })

//POST
const button = document.getElementById('button');

button.addEventListener('click', () => {

    const nome = document.getElementById('nome').value; //.value é porque está
    const endereco = document.getElementById('endereco').value;
    console.log(nome, endereco)

    fetch('http://localhost:5001/maravilhosas/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'title': nome,
            'metadata': {
                'image': {
                    'url': endereco
                }
            }
        })
    })
})
