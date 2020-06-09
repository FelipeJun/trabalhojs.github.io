/* jshint esversion: 6 */

/* Armazena títulos e texto das notas em variáveis globais */
var tituloNotas = [];
var textoNotas = [];
var avaliacao = [];

/* Função chamada ao clicar no botão "Gravar lembrete" */
function gravarNota() {
    /* Obtém os valores digitados nas caixas de texto (título)
        e descrição da nota */
    const titulo = document.querySelector("#titulo").value;
    const texto = document.querySelector("#texto").value;
    
    /* Adiciona os titulos e descrições no final do array */
    tituloNotas.push(titulo);
    textoNotas.push(texto);

    /* Solicita a atualização da tela */
    atualizarListaNotas();
}

/* Função utilizada para atualizar a lista de notas com os
    textos e títulos que estão nos arrays */
function atualizarListaNotas() {
    /* Obtém todos os itens de notas sendo exibidos */
    const elements = document.querySelectorAll(".item-show");

    /* Itera pelos itens e solicita a remoção dos mesmos */
    for (let i = 0; i < elements.length; i++) {
        elements[i].parentNode.removeChild(elements[i]);
    }

    /* Com a lista visual de itens "limpa", itera pelo array de notas
        usando os títulos como referência */
    for (let i = 0; i < tituloNotas.length; i++) {
        /* Clona o item de referência para criar um item novo */
        const cloneItem = document.querySelector("#base-item").cloneNode(true);
        /* Associa o item de referência ao container de listas */
        const parent = document.querySelector("#content");
        parent.appendChild(cloneItem);

        /* Faz o item aparecer */
        cloneItem.className = "item-show";

        /* Configura o titulo e o texto das notas com base no item do array */
        cloneItem.querySelector(".item-title").textContent = tituloNotas[i];
        cloneItem.querySelector(".item-text").textContent = textoNotas[i];
    }
}

function editar()
{
    let novoarray = parseInt(prompt('Indique a posição do array'));
    let novotitulo = prompt('Escreva o novo título');
    let novotexto = prompt('Escreva o novo texto');

    tituloNotas[novoarray] = novotitulo;
    textoNotas[novoarray] = novotexto;

    alert(tituloNotas[novoarray] + ' ' + textoNotas[novoarray]);

    atualizarListaNotas();
    
}

function deletar(){
    let apagararray = parseInt(prompt('Indique a posição do array'));
    tituloNotas.splice(apagararray,1);
    textoNotas.splice(apagararray,1);
    atualizarListaNotas();
}

function avaliar()
{
    let array = parseInt(prompt('Indique a posição do array'));
    let avaliacao = parseInt(prompt('Coloque sua avaliação de 0 à 10'));
    let elementoP = document.getElementById('id');
    if(elementoP)
    {
        elementoP.parentNode.removeChild(elementoP);
    }
    elementoP = document.createElement('p');
    elementoP.id = 'id';
    const textoP = document.createTextNode('avaliação: ' + avaliacao + '/10');
    elementoP.appendChild(textoP);
}