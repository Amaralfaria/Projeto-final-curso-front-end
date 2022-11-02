var imgs = document.querySelectorAll('#carrosel_imgs img');
var next = document.querySelector('#carrosel_imgs .next');
var prev = document.querySelector('#carrosel_imgs .prev');
var num = 0;

next.addEventListener('click', function(){
    imgs[num].classList.remove('atual');
    num++;
    num %= imgs.length;
    imgs[num].classList.add('atual');
});

prev.addEventListener('click', function(){
    imgs[num].classList.remove('atual');
    num--;
    num %= imgs.length;
    num = Math.abs(num);
    imgs[num].classList.add('atual');
});