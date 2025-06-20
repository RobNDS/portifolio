document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('translate').addEventListener('click', function(event) {
        event.preventDefault(); 
        traducao();
    });
});

function traducao(){
    const anchor = document.getElementById("translate");

    isEnglish = !isEnglish;

    anchor.innerHTML = isEnglish ? 'Traduzir' : 'Translate';

    fetch('conteudo.json')
    .then(r => r.json())
    .then(data => {
        processJson(data);
    })
    .catch(e => {
        console.log('Erro ao carregar JSON', e);
    });
}