
function clicou() {
    document.getElementById("agradecimento");
    console.log(document.getElementById("agradecimento").innerHTML = "<b>Obrigado por cliclar</b>"); //a teg "b", deixa os elementos em negrito.
    //console.log(document.getElementById("agradecimento").innerHTML = "Obrigado por cliclar");
    //console.log(document.getElementById("agradecimento"));
    //alert("Obrigado por clicar!");
}

function redirecionar(){
    //window.open("https://www.linkedin.com/in/josemauricio-rodriguesdelima/"); //abrir em outra aba/janela.
    window.location = "https://www.linkedin.com/in/josemauricio-rodriguesdelima/;" //abrir na mesma aba.
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto")
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

//Funções.
/*function soma(n1, n2) {
    return n1 + n2;
}

var validar = 0;

function validaIdade(idade) {
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

/*function validaIdade(idade) {
    var validar;
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));
*/

//Condicionais, laço de repetição e date.
/*
var d = new Date(); //variável declarada que pega o dia, o mês, o ano e a hora. "Data".
    alert(d);
    alert(d.getMonth()+1); //imprime como alerta o mês do ano com a adição de +1
    alert(d.getMinutes()); //imprime como alerta o minuto.
    alert(d.getDay()); //imprime como alerta o dia da semana em número.
    alert(d.getHours()); //imprime como alerta a hora ex.: 00:09 = será impresso: 0
    console.log(d.getMonth()+1); //imprime no console.
    console.log(d.getMinutes()); //imprime o minuto no console.
    console.log(d.getDay()); //imprime no console o dia da semana em número.
    console.log(d.getHours()); //imprime no console a hora ex.: 00:09 =  será impresso: 0
*/
/*
var count;
for (count = 0; count <= 5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5) {
    console.log(count);
    alert(count);
    count++;    
}
*/

/*var idade = prompt("Qual sua idade?"); //O comando prompt solicita que o usuário digite algo.
if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

/*//Listta de dicionário
var frutas = [{nome:"Maça", cor:"Vermelha"}, {nome:"Banana", cor:"Amarelo"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*//Dicionário
var fruta = {nome:"Maça", cor:"Vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
*/

//Array List
//var lista = ["Maça", "Pera", "Laranja"]; //criado um arrya list
//lista.push("uva"); //adiciona um novo item a lista. (uva)
//lista.pop(); //retira o ultimo item da lista.
//console.log(lista); //Mostra no console a lista.
//console.log(lista[1]); //Imprimindo apenas um item da lista na poisição 1, no caso o segundo item.
//alert(lista[1]); //cria um alerta onde vai mostrar o item da lista.
//console.log(lista.length); //mostra o tamanho da lista no console.
//console.log(lista.reverse()); //coloca os objetos da lista de trás pra frente.
//console.log(lista.toString()); //Converte o arrya list em uma String.
//console.log(lista[0]); //imprime o primeiro item da lista.
//console.log(lista.toString()[0]); // irá imprimir a primeira letra da String
//console.log(lista.join(" - ")); //Usa-se join como referencia para escolher a forma como a strig será separada.

/*var nome = (" José Maurício");
var n1 = 31;
var n2 = 10;
var frase = ("Japão é o melhor time do mundo. ");
//alert("Bem vindo," + nome + ", sua idade é, " + idade);
//alert(idade + idade2);
console.log(nome + " " + (n1 + n2)); //mostra no console a variável nome + a soma das variáveis n1+n2.
console.log(n1 * n2); //multiplicação
console.log(frase.toUpperCase()); //Deixando todo conteúdo da variável em Caixa Alta.
console.log(frase.toLowerCase()); // Deixando todo conteúdo da variável em Caixa Baixa.
//alert(frase.replace("Japão", "Brasil")); //O replace troca a palavra Japão para Brasil.
*/