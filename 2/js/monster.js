var name;
var life;
var money;
var awake;

function init(n, l, m){ //initialise les variables
  name = n;
  life = l;
  money = m;
  awake = true;
}

function showme(){
  let test;
  if (awake){ //permet d'afficher reveiller ou endormi à la place de true ou false
   test = "réveillé";
  }else{
   test = "endormi";
  }
  log("Propriété du monstre : son nom est " + name + " sa vie est égale à " + life + " il possède " + money + " euros et il est " + test);
}

function log(message){ //affiche le message dans la div actionbox
  document.getElementById("actionbox").innerHTML = "<p>" + message + "</p>";
}

function displayStatus(life, money, awake){ //permet d'afficher la vie dans l'ul status
  let test;
  if (awake){
   test = "réveillé";
  }else{
   test = "endormi";
  }
  document.getElementById("status").innerHTML = "<li>Life :" + life + " </li><li>Money : "+money+" </li><li>" + test + "</li>" //écriture
}

function go(){ //fonction de lancement des autres fonctions
  init('Casper',100,50);
  showme();
}

window.onload = go; //lance la fonction go quand la page se charge

window.addEventListener('load', function() {
  document.querySelector("#b1").addEventListener('click', go); //lance la fonction go quand on click sur new life
});
