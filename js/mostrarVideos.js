import {conectaApi} from './conectaApi.js';

const lista = document.querySelector("[data-lista]")

export default function constroidCard(titulo,descricao,url,imagem){
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
    title="YouTube video player" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>`;

return video;
}


async function listaVideos(){
    try{
        const listaApi = await conectaApi.listaVideos();
        listaApi.forEach(elemento => lista.appendChild(constroidCard(elemento.titulo,elemento.descricao, elemento.url, elemento.imagem)));
        //pra cada item da lista da nossa api criou um card que seria uma li que foi anexado dentro da ul no index html que estamos referenciado como lista pra cada item da lista da nossa api um item da lista html deve ser criado
    }catch{
        lista.innerHTML =  `<h2 class="mensagem__titulo">Não foi possivel carregar a lista de videos</h2>`
    }
}

listaVideos();