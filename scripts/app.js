
let userChose = document.getElementById('userChose');
let result = document.getElementById('result');

        let msg;
        let computerChose = Math.floor(Math.random() * 10);

function compare() {
     
    if(userChose.value == computerChose){
      msg = 'You win';
    }else if(userChose.value > computerChose){
      msg = 'SO big';
    }else{
        msg = 'SO small';
    }
    result.innerHTML = msg;

}

/*---------------------code for the DICE ROLLER----------------------*/

const face = document.getElementById('face');

const faces = ['../../img/dice1.png','../../img/dice2.png','../../img/dice3.png','../../img/dice4.png','../../img/dice5.png','../../img/dice6.png',];

function roll(){
   let r = Math.floor(Math.random() * 6);
      face.setAttribute('src',faces[r]);
}
document.addEventListener('keydown',function(e){
if(e.key === 'Enter')
    roll();
})

/*-------------------------------------- menu ---------------------*/

const menu = document.getElementById('menu');
const aside = document.getElementById('aside');
const menuClose = document.getElementById('menuClose');
const bluring = document.getElementById('bluring');



menu.addEventListener('click', ()=> {
      aside.classList.add('right-0');
      aside.classList.remove('right-[-100%]');
   bluring.classList.remove('hidden');
});

menuClose.addEventListener('click', ()=> {
      aside.classList.remove('right-0');
      aside.classList.add('right-[-100%]');
     bluring.classList.add('hidden');
});
bluring.addEventListener('click' , ()=>{
    aside.classList.remove('right-0');
      aside.classList.add('right-[-100%]');
     bluring.classList.add('hidden');
})

/*___________________scrollbar____________________________*/

window.addEventListener("scroll",() => {
  const mypos = window.scrollY;
  const docheight = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = (mypos / docheight) * 100;

  document.getElementById("scrollbar").style.width = percentage + "%";

});