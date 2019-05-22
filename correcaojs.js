const container = document.querySelector('.maravilhosas__box');

fetch('https://theblackwomanhistory.firebaseio.com/.json')
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        data.content.forEach((mulher) =>{
            
            let box = document.createElement('div');
            box.setAttribute('class', 'maravilhosas__perfil');
            container.appendChild(box);

            let ancora = document.createElement('a');
            ancora.setAttribute('href', '#!');
            box.appendChild(ancora)

            let nome = document.createElement('p');
            nome.innerHTML = mulher.title;
            ancora.appendChild(nome);
            
            let img = document.createElement('img');
            img.setAttribute('class', 'img-responsive'); 
            
            
            if(mulher.metadata && mulher.metadata.imagem){
                img.setAttribute('src', mulher.metadata.imagem.url);
                            }
                            else{
                                img.setAttribute('src', './img/img-mulher.png');
                            }
    })
})
.catch((erro) => {
    console.log(erro);
})









ANTERIOR 
const box = document.querySelector(".maravilhosas__box")

fetch('https://theblackwomanhistory.firebaseio.com/.json')
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        data.content.forEach(mulher =>{
            

            let perfil = document.createElement('div');
            perfil.setAttribute('class', 'maravilhosas__perfil');
            box.appendChild(perfil);

            let link = document.createElement('a');
            perfil.appendChild(link);

            let nome = document.createElement('p');
            nome.innerHTML = mulher.title;
            link.appendChild(nome);
            
            let imagem = document.createElement('img');
             if (mulher.metadata && mulher.metadata.imagem.url){
                 imagem.setAttribute('src', mulher.metadata.imagem.url);
        
             }
             else {
                 imagem.setAttribute('src', './img/igm-mulher.png')
                }
                 link.appendChild(imagem)
    })
})
.catch((erro) => {
    console.log(erro);
})





     // if (mulher.metadata && mulher.metadata.imagem.url){
            //      imagem.setAttribute('src', mulher.metadata.imagem.url);
        
            //  }
            //  else {
            //      imagem.setAttribute('src', './img/igm-mulher.png')
            //     }
            //      link.appendChild(imagem)