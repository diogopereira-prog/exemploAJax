paginas = [{"pagina":"tabela.html","chamada":"carregarPessoas()"},{"pagina":"lista.html","chamada":"null"}];
async function carregar(p){
    var obj = await fetch("views/"+paginas[p-1].pagina);
    var conteudo = await obj.text();
    var app = document.getElementById("app");
    app.innerHTML = conteudo;
    eval(paginas[p-1].chamada);
    console.log(paginas[p-1]);
}

async function carregarPessoas() {
    tabela = document.getElementById("corpoTabela");
    tabela.innerHTML= "";
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        pessoas = JSON.parse(this.responseText);
        console.log(pessoas);
        texto = "";
        pessoas.forEach(p => {
            texto += `
            <tr>
                <td>${p.nome}</td>
                <td>${p.sobrenome}</td>
                <td>${p.email}</td>
            </tr>
            `;
        });
        tabela.innerHTML = texto;
    }
    xhttp.open("GET", "control/getPessoas.json", true);
    xhttp.send();
}