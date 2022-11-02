var paragrafos = document.querySelectorAll('#slider_text figure');
var prev = document.querySelector('#slider_text .prev')
var next = document.querySelector('#slider_text .next')
var pos = 0;


next.addEventListener('click',function(){
    paragrafos[pos].classList.remove('atual');
    pos++;
    pos %= paragrafos.length
    paragrafos[pos].classList.add('atual');
})


prev.addEventListener('click',function(){
    paragrafos[pos].classList.remove('atual');
    pos--;
    pos %= paragrafos.length;
    pos = Math.abs(pos);
    paragrafos[pos].classList.add('atual');
})





