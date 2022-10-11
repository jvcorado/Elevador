const terreoAndar = document.querySelectorAll('.terreoAndar');
const primeiroAndar = document.querySelectorAll('.primeiroAndar');
const segundoAndar = document.querySelectorAll('.segundoAndar');
const terceiroAndar = document.querySelectorAll('.terceiroAndar');
const btnTerreo = document.querySelectorAll('#btn-terreo');
const btnPrimeiro = document.querySelectorAll('#btn-primeiro');
const btnSegundo = document.querySelectorAll('#btn-segundo');
const btnTerceiro = document.querySelectorAll('#btn-terceiro');
const numberAndar = document.querySelectorAll('#numberAndar');

let andar = null;

function descerTerreoAndar(){
    andar = "T";
    setTimeout(()=>{
        document.querySelector('.img-terceirAndar').src="img/elevadorSemiAberto.jpg";
    },1000);
    setTimeout(()=>{
        document.querySelector('.img-terceiroAndar').src="img/elevadorFechado.jpg";
    },2000);
    
    setTimeout(()=>{
        document.querySelector("#numberAndar").innerText = andar;

    },3000);
    setTimeout(()=>{
        document.querySelector("#numberAndar").innerText = andar;
        document.querySelector('.img-terreo').src="img/elevadorSemiAberto.jpg";
    },4000);
    setTimeout(()=>{
        document.querySelector('.img-terreo').src="img/elevadorAberto.jpg";
    },5000);

    document.querySelector('#btn-primeiro').disabled= false;
    document.querySelector('#btn-segundo').disabled= false;
    document.querySelector('#btn-terreo').disabled= true;
    document.querySelector('#btn-terceiro').disabled= false;
}

function subirPrimeiroAndar(){
    andar = 1;
    setTimeout(()=>{
        document.querySelector('.img-terreo').src="img/elevadorSemiAberto.jpg";
    },1000);
    setTimeout(()=>{
        document.querySelector('.img-terreo').src="img/elevadorFechado.jpg";
    },2000);

    
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
    
    
    document.querySelector('#btn-terreo').disabled= false;
    document.querySelector('#btn-primeiro').disabled= true;
}



function subirSegundoAndar(){
    andar = 2;
    setTimeout(()=>{
        document.querySelector('.img-primeiroAndar').src="img/elevadorSemiAberto.jpg";
    },1000);
    setTimeout(()=>{
        document.querySelector('.img-primeiroAndar').src="img/elevadorFechado.jpg";
    },2000);


    setTimeout(()=>{
        document.querySelector("#numberAndar").innerText = andar;
    },3000);
    setTimeout(()=>{

        document.querySelector('.img-segundoAndar').src="img/elevadorSemiAberto.jpg";
    },4000);
    setTimeout(()=>{
        document.querySelector('.img-segundoAndar').src="img/elevadorAberto.jpg";
    },5000);
   
    document.querySelector('#btn-terreo').disabled= false;
    document.querySelector('#btn-primeiro').disabled= true;
    document.querySelector('#btn-segundo').disabled= true;
    document.querySelector('#btn-terceiro').disabled= false;
}

function subirTerceiroAndar(){
    andar = 3;
    setTimeout(()=>{
        document.querySelector('.img-segundoAndar').src="img/elevadorSemiAberto.jpg";
    },1000);
    setTimeout(()=>{
        document.querySelector('.img-segundoAndar').src="img/elevadorFechado.jpg";
    },2000); 
    
    setTimeout(()=>{
        document.querySelector("#numberAndar").innerText = andar;
    },3000);
    setTimeout(()=>{
        document.querySelector('.img-terceiroAndar').src="img/elevadorSemiAberto.jpg";
    },4000);
    setTimeout(()=>{
        document.querySelector('.img-terceiroAndar').src="img/elevadorAberto.jpg";
    },5000);

    document.querySelector('#btn-terreo').disabled= false;
    document.querySelector('#btn-terceiro').disabled= true;
    document.querySelector('#btn-primeiro').disabled= true;
    document.querySelector('#btn-segundo').disabled= true;
}