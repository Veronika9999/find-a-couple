let box = document.querySelector('.box');
let kartAll = document.querySelectorAll('.box__item');
let button = document.querySelector('button');
let audio = document.createElement('audio');
let again = document.querySelector('.again');
let kardA;
let kardB;
let kardActive = false;
let kartChenge = false;
let clouseKart = 16;

randomPosition();
box.onclick = function (e) {
    if (kartChenge == false) {
        let kard = e.target;
        audio.setAttribute('src', 'audio/de946705c1ec58b.mp3');
        audio.volume = 0.1
        audio.play();
        if (!kard.classList.contains('flip')) {
            kard.classList.add('flip');
            if (kardActive == false) {
                kardA = kard;
                kardActive = true;
            } else {
                kardB = kard;
                kartChenge = true;
                if (kardA.querySelector('img').src == kardB.querySelector('img').src) {
                    audio.setAttribute('src', 'audio/47337cf815a3c9f.mp3');
                    audio.play();
                    setTimeout(() => {
                        kardA = '';
                        kardB = '';
                        kardActive = false;
                        kartChenge = false;
                        winner();
                    }, 1000);
                } else {
                    setTimeout(() => {
                        kardA.classList.remove('flip');
                        kardB.classList.remove('flip');
                        kardA = '';
                        kardB = '';
                        kardActive = false;
                        kartChenge = false;
                    }, 1000);
                }

            }
        }
    }
    // if(button.classList('again')){

    // }
}

again.onclick = function(){
    kardActive = false;
    kartChenge = false;
    button.classList.remove('_active');
    for(let i = 0; i<16; i++){
        kartAll[i].classList.remove('flip');
    }
    randomPosition()
}

function winner(){
    for(let i = 0; i<16; i++){
       if (kartAll[i].classList.contains('flip')){
           clouseKart = clouseKart - 1;
           console.log (clouseKart)
           if (clouseKart == 0){
            setTimeout(() => {
                audio.setAttribute('src', 'audio/всё открыто.mp3');
                audio.play();
                setTimeout(() => {
                    button.classList.add('_active');
                }, 2000);
            }, 1000);
           }
       }
    }
    clouseKart = 16;
}

function randomPosition(){
    for(let i = 0; i<16; i++){
        let numberRandom = Math.floor(Math.random () * (16 - 1 + 1) * 1);
        kartAll[i].style.order = numberRandom;
    }
}

