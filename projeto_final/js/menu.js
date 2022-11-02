var menu = document.querySelector('#btn_menu');
var lista = document.querySelector('#menu ul');

menu.addEventListener('click', function(){
    lista.classList.toggle('show_menu'); 
})