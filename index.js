const terreoAndar = document.querySelectorAll('.terreoAndar');
const primeiroAndar = document.querySelectorAll('.primeiroAndar');
const segundoAndar = document.querySelectorAll('.segundoAndar');
const terceiroAndar = document.querySelectorAll('.terceiroAndar');
const btnTerreo = document.querySelectorAll('#btn-terreo');
const btnPrimeiro = document.querySelectorAll('#btn-primeiro');
const btnSegundo = document.querySelectorAll('#btn-segundo');
const btnTerceiro = document.querySelectorAll('#btn-terceiro');
const numberAndar = document.querySelectorAll('#numberAndar');
const triangulo = document.querySelector('.triangulo');
const trianguloDescendo = document.querySelector('.trianguloDescendo');


let andar = null;
let pos = null;

function mostraTrianguloSubindo(){
    setTimeout(()=>{
        triangulo.style.animation ='transicaoSubir 8s linear ';
    },2000);
}

function mostraTrianguloDescendo(){
    setTimeout(()=>{
        trianguloDescendo.style.animation = 'transicaoDescer 6s linear '; 
    },2000);
}

function descerTerreoAndar(){
    andar = "T";
    pos = 0;

    if(pos === 0){
        setTimeout(()=>{
            document.querySelector('.img-terceiroAndar').src="img/elevadorSemiAberto.jpg";
        },1000);
        setTimeout(()=>{
            document.querySelector('.img-terceiroAndar').src="img/elevadorFechado.jpg";
        },2000);

        mostraTrianguloDescendo();
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = 2;
        },3000);
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = 1;
        },4000);
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = andar;
            document.querySelector('.img-terreo').src="img/elevadorSemiAberto.jpg";
        },5000);
        setTimeout(()=>{
            document.querySelector('.img-terreo').src="img/elevadorAberto.jpg";
        },6000);
    };
    

    document.querySelector('#btn-primeiro').disabled= false;
    document.querySelector('#btn-segundo').disabled= false;
    document.querySelector('#btn-terreo').disabled= true;
    document.querySelector('#btn-terceiro').disabled= false;
}

function subirPrimeiroAndar(){
    andar = 1;
    pos = 0;

    if(pos === 0){
        setTimeout(()=>{
            document.querySelector('.img-terreo').src="img/elevadorSemiAberto.jpg";
        },1000);
        setTimeout(()=>{
            document.querySelector('.img-terreo').src="img/elevadorFechado.jpg";
        },2000);
        mostraTrianguloSubindo();
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = andar;
        },3000);
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = andar;
            document.querySelector('.img-primeiroAndar').src="img/elevadorSemiAberto.jpg";
        },4000);
        setTimeout(()=>{
            document.querySelector('.img-primeiroAndar').src="img/elevadorAberto.jpg";
        },5000);
    }
    
    document.querySelector('#btn-terreo').disabled= false;
    document.querySelector('#btn-primeiro').disabled= true;
}



function subirSegundoAndar(){
    andar = 2;
    pos = 0;

    if(pos === 0){
        setTimeout(()=>{
            document.querySelector('.img-terreo').src="img/elevadorSemiAberto.jpg";
        },1000);
        setTimeout(()=>{
            document.querySelector('.img-terreo').src="img/elevadorFechado.jpg";
        },2000);
        mostraTrianguloSubindo();
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = 1;
        },3000);
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = andar;
        },4000);
        setTimeout(()=>{
    
            document.querySelector('.img-segundoAndar').src="img/elevadorSemiAberto.jpg";
        },5000);
        setTimeout(()=>{
            document.querySelector('.img-segundoAndar').src="img/elevadorAberto.jpg";
        },6000);
    }
   
   
    document.querySelector('#btn-terreo').disabled= false;
    document.querySelector('#btn-primeiro').disabled= true;
    document.querySelector('#btn-segundo').disabled= true;
    document.querySelector('#btn-terceiro').disabled= false;
}

function subirTerceiroAndar(){
    andar = 3;
    pos = 0;

    if(pos === 0){
        setTimeout(()=>{
            document.querySelector('.img-terreo').src="img/elevadorSemiAberto.jpg";
        },1000);
        setTimeout(()=>{
            document.querySelector('.img-terreo').src="img/elevadorFechado.jpg";
        },2000);
        mostraTrianguloSubindo();
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = 1;
        },3000);
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = 2;
        },4000);
        setTimeout(()=>{
            document.querySelector("#numberAndar").innerText = andar;
        },5000);
        setTimeout(()=>{
            document.querySelector('.img-terceiroAndar').src="img/elevadorSemiAberto.jpg";
        },6000);
        setTimeout(()=>{
            document.querySelector('.img-terceiroAndar').src="img/elevadorAberto.jpg";
        },7000);
    }
    

    document.querySelector('#btn-terreo').disabled= false;
    document.querySelector('#btn-terceiro').disabled= true;
    document.querySelector('#btn-primeiro').disabled= true;
    document.querySelector('#btn-segundo').disabled= true;
}