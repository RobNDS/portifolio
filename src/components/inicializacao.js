let isEnglish = false;

fetch('conteudo.json')
    .then(r => r.json())
    .then(data => {
        processJson(data);
    })
    .catch(e => {
        console.log('Erro ao carregar JSON', e);
    });
    
function processJson(data){
    populaApresentacao(data.apresentacao[0]);
    populaEstudos(data.estudos[0]);
    populaTecnicas(data.tecnicas[0]);
    populaProjetos(data.projetos[0]);
}

function populaApresentacao(data){
    const titulo = document.getElementById("titulo-apresentacao")
    const conteudo = document.getElementById("txt-apresentacao");

    titulo.innerHTML = isEnglish ? data.tituloEn : data.tituloBr;
    conteudo.innerHTML = isEnglish ? data.textoEn : data.textoBr;
}

function populaEstudos(data){
    const titulo = document.getElementById("titulo-estudos")
    const conteudo = document.getElementById("txt-estudos");

    titulo.innerHTML = isEnglish ? data.tituloEn : data.tituloBr;
    conteudo.innerHTML = isEnglish ? data.textoEn : data.textoBr;
}

function populaTecnicas(data){
    const titulo = document.getElementById("titulo-tecnicas")

    titulo.innerHTML = isEnglish ? data.tituloEn : data.tituloBr;
}

function populaProjetos(data){
    const titulo = document.getElementById("titulo-projetos")

    titulo.innerHTML = isEnglish ? data.tituloEn : data.tituloBr;
}