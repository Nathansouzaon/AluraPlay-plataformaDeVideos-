import {conectaApi} from './conectaApi.js';
import constroiCard from './mostrarVideos.js';
async function buscarVideo(evento){
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);
    const lista = document.querySelector("[data-lista]");
    while(lista.firstChild){
        //enquanto a lista ter um primeiro filho tem coisa la dentro enquanto for verdadeiro removo o primeiro filho da lista e fica no loop ate eu apagar  todos os filhos que a lista tem ai a lista fica vazia em seguida crio a lista de itens que quero pesquisar
        //removendo varios itens filhos de itens pais
        lista.removeChild(lista.firstChild);
    }
    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo,elemento.descricao,elemento.url, elemento.imagem)));

    if(busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existe video com esse Termo</h2>`
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideo(evento));
 