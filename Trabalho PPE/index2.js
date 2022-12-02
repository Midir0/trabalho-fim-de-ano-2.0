if(typeof(Storege)!="undefine"){
    
const cadForm = document.getElementById("cad-receita-form");

cadForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    var nome_receita = document.getElementById("nome_receita").value;
    var data_receita = document.getElementById("data_receita").value;
    localStorage.setItem("receita", JSON.stringify({nome_receita, data_receita}));
    var receita_localstorage = localStorage.getItem("receita");
    var dados_receita = JSON.parse(receita_localstorage);
    document.getElementById("conteudo").innerHTML = "Nome: " + dados_receita.nome_receita + "<br>E-mail: " + dados_receita.data_receita + "<br>";

});

}else{
    document.write('Seu Navegador Não é Compativel Com Esse Site');
} 
