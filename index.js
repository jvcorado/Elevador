const terreoAndar = document.querySelectorAll('.terreoAndar');
const primeiroAndar = document.querySelectorAll('.primeiroAndar');
const segundoAndar = document.querySelectorAll('.segundoAndar');
const terceiroAndar = document.querySelectorAll('.terceiroAndar');
const btnTerreo = document.querySelectorAll('#btn-terreo');
const btnPrimeiro = document.querySelectorAll('#btn-primeiro');
const btnSegundo = document.querySelectorAll('#btn-segundo');
const btnTerceiro = document.querySelectorAll('#btn-terceiro');



function descerTerreoAndar(){
    document.querySelector('.img-terreo').src="img/elevadorAberto.jpg"
    document.querySelector('.img-terceiroAndar').src="img/elevadorFechado.jpg";
    document.querySelector('.img-segundoAndar').src="img/elevadorFechado.jpg";
    document.querySelector('.img-primeiroAndar').src="img/elevadorFechado.jpg";
    document.querySelector('#btn-primeiro').disabled= false;
    document.querySelector('#btn-segundo').disabled= false;
    document.querySelector('#btn-terreo').disabled= true;
    document.querySelector('#btn-terceiro').disabled= false;
}

function subirPrimeiroAndar(){
    document.querySelector('.img-primeiroAndar').src="img/elevadorAberto.jpg";
    document.querySelector('.img-terreo').src="img/elevadorFechado.jpg"
    document.querySelector('.img-segundoAndar').src="img/elevadorFechado.jpg";
    document.querySelector('.img-terceiroAndar').src="img/elevadorFechado.jpg";
    document.querySelector('#btn-terreo').disabled= false;
    document.querySelector('#btn-primeiro').disabled= true;
}



function subirSegundoAndar(){
    document.querySelector('.img-segundoAndar').src="img/elevadorAberto.jpg";
    document.querySelector('.img-terreo').src="img/elevadorFechado.jpg"
    document.querySelector('.img-primeiroAndar').src="img/elevadorFechado.jpg";
    document.querySelector('.img-terceiroAndar').src="img/elevadorFechado.jpg";
    document.querySelector('#btn-terreo').disabled= false;
    document.querySelector('#btn-primeiro').disabled= true;
    document.querySelector('#btn-segundo').disabled= true;
    document.querySelector('#btn-terceiro').disabled= false;
}

function subirTerceiroAndar(){
    document.querySelector('.img-terceiroAndar').src="img/elevadorAberto.jpg";
    document.querySelector('.img-terreo').src="img/elevadorFechado.jpg"
    document.querySelector('.img-primeiroAndar').src="img/elevadorFechado.jpg";
    document.querySelector('.img-segundoAndar').src="img/elevadorFechado.jpg";
    document.querySelector('#btn-terreo').disabled= false;
    document.querySelector('#btn-terceiro').disabled= true;
    document.querySelector('#btn-primeiro').disabled= true;
    document.querySelector('#btn-segundo').disabled= true;
}