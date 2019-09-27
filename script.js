const btn   = document.querySelector('#btn'),
      box1  = document.querySelector('.box1'),
      ru    = document.querySelector('#ru'),
      eng   = document.querySelector('#eng'),
      lang  = document.querySelector('#lang'),
      box2  = document.querySelector('#box2'),
      X     = document.querySelector('#X');

let counter      = true,
    counter_lang = true;


btn.addEventListener('click', function(){
    if(counter){
        box1.style.display = 'block';
        box2.style.color = 'white';
        box2.style.display = 'none';
        X.style.display = 'block';
        counter = false;
    }else{
        box1.style.display = 'none';
        box2.style.color = '#372243';
        box2.style.display = 'block';
        X.style.display = 'none';
        counter = true;
    }
});

window.onresize = function(){
    if(screen.width > 655){
        box1.removeAttribute('style');
    }
}

// lang.addEventListener('click', function(){
//     if(counter_lang){
//         eng.style.display = 'block';
//         counter_lang = false;
//     }else{
//         eng.style.display = 'none';
//         counter_lang = true;
//     }
// });

console.log(lang);