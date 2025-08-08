const result = document.getElementById('result');
const info = document.getElementById('info');
const score = document.getElementById('score');

arr = ['rock' , 'paper' , 'scissor'];

let resultText = 'lets play';

const sco = {
     wins : 0,
     losses : 0,
     ties : 0
};

        function display(){
            score.innerHTML = `
           SCORE:     Wins : ${sco.wins} Losses : ${sco.losses} Ties : ${sco.ties}
            `;
        result.innerHTML = resultText;
  }
function play(p){
    let r = Math.floor(Math.random()* 3);
let computerChose = arr[r];


    if(p === computerChose){
        resultText = 'tie';
        info.innerHTML = `
        you picked ${p} Computer picked ${computerChose}
        `;
    }else if(p === 'rock' && computerChose === 'scissor' || p === 'scissor' && computerChose === 'paper' || p === 'paper' && computerChose === 'rock'  ){
        resultText = 'you win';
          info.innerHTML = `
        you picked ${p} Computer picked ${computerChose}
        `;
    }else{
         resultText = 'you lose';
           info.innerHTML = `
        you picked ${p} Computer picked ${computerChose}
        `;
    }
    if(resultText === 'you win'){
        sco.wins += 1;
    }else if(resultText === 'you lose'){
         sco.losses += 1;
    }else{
         sco.ties += 1;
    }
   display();

}
function reset(){

const sco = {
     wins : 0,
     losses : 0,
     ties : 0
};
  score.innerHTML = `
     SCORE :    Wins : ${sco.wins} Losses : ${sco.losses} Ties : ${sco.ties}
    `;

}