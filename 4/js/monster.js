//initialisation des variables
var name;
var life;
var money;
var awake; //true réveillé

//initialisation des handlers
var boutonRun = document.getElementById("b2");
var boutonFight = document.getElementById("b3");
var boutonWork = document.getElementById("b7");
var boutonSleep = document.getElementById("b4");
var boutonEat = document.getElementById("b5");
var boutonNewLife = document.getElementById("b1");
var boutonShow = document.getElementById("b6");
var boutonKill = document.getElementById("k");

//tableau de handlers
var tableauHandlers = [boutonRun,boutonFight,boutonWork,boutonEat,boutonSleep];

//pour modifier la couleur du monstre juste apres
var couleurmonstre = document.getElementById("monster");

//permet de modifer l'image du monstre
var imageMonstre = document.getElementById("image0");

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
  log("Le monstre s'appelle " + name + ", sa vie est égale à " + life + ", il possède " + money + " euros et il est " + test);
}

function log(message){ //affiche le message dans la div actionbox
  document.getElementById("actionbox").innerHTML = "<p>" + message + "</p>";
}

function displayStatus(life, money, awake){ //permet d'afficher la vie dans l'ul status
  let test;
  if (awake){ //permet de d'écrire si le monstre est réveillé ou endormi
   test = "réveillé";
  }else{
   test = "endormi";
  }
  document.getElementById("status").innerHTML = "<li>Life :" + life + " </li><li>Money : "+money+" </li><li>" + test + "</li>" //écriture
  if (life<=5){
    couleurmonstre.style.backgroundColor = "red";
  }
  if (life<=10 && life>5){
    couleurmonstre.style.backgroundColor = "orange";
  }
  if (life<=15 && life>10){
    couleurmonstre.style.backgroundColor = "blue";
  }
  if (life>15){
    couleurmonstre.style.backgroundColor = "green";
  }
  if (money<=5){
    couleurmonstre.style.width = "50px";
  }
  if (money<=10 && money>5){
    couleurmonstre.style.width = "100px";
  }
  if (money<=15 && money>10){
    couleurmonstre.style.width = "150px";
  }
  if (money>15){
    couleurmonstre.style.width = "200px";
  }
}

function go(){ //fonction de lancement des autres fonctions
  imageMonstre.src="monstreReveille.jpg";
  init('Casper',20,15);
  showme();
  displayStatus(life, money, awake);
}

function run(){ //fonction run qui permet de courir
  if (!awake){
    log("Le monstre ne peut pas courir, il dort.");
  }
  if (life>0 && awake){
    imageMonstre.src="monstreCours.jpg"; //changement d'image
    life--;
    if (life<0){
      life=0; //permet de mettre la vie à 0, plus facile pour voir si le monstre est mort (=0)
    }
    log("Le monstre court.");
  }
  displayStatus(life, money, awake);
}

function fight(){ //fonction fight qui permet de se battre
    if (!awake){
      log("Le monstre ne peut pas se battre, il dort.");
    }
    if (life>0 && awake){
      imageMonstre.src="monstreFight.jpg"; //changement d'image
      life = life - 3;
      if (life<0){
        life=0; //permet de mettre la vie à 0, plus facile pour voir si le monstre est mort (=0)
      }
      log("Le monstre se bat.");
    }
    displayStatus(life, money, awake);
}

function work(){ //fonction work qui permet de travailler
  if (!awake){
    log("Le monstre ne peut pas travailler, il dort.");
  }
  if (life>0 && awake){
    imageMonstre.src="monstreTravaille.jpg"; //changement d'image
    life--;
    money = money + 2;
    if (life<0){
      life=0;//permet de mettre la vie à 0, plus facile pour voir si le monstre est mort (=0)
    }
    log("Le monstre travaille.");
  }
  displayStatus(life, money, awake);
}

function eat(){ //fonction eat qui permet de manger
  if (!awake){
    log("Le monstre ne peut pas manger, il dort.");
  }
  if (money<3){
    log("Le monstre ne peut pas manger, il est trop pauvre.");
  }
  if (money>=3 && awake){
    imageMonstre.src="monstreMange.jpg"; //changement d'image
    money=money-3;
    life=life+2;
    log("Le monstre mange.")
  }
  displayStatus(life, money, awake);
}

function sleep() { //fonction sleep pour endormir le monstre
  if(life>0){
    imageMonstre.src="monstreEndormi.jpg"; //changement d'image
    awake = false;
    log("Le monstre dort.");
    displayStatus(life, money, awake);
    setTimeout(nosleeping,7000);
  }
}

function nosleeping() { //fonction nosleeping pour réveillé le monstre
  awake = true;
  log("Le monstre se réveille.");
  life++;
  imageMonstre.src="monstreReveille.jpg"; //changement d'image
  displayStatus(life, money, awake);
}

function hasard(){
  let random = Math.floor(Math.random() * tableauHandlers.length);
  tableauHandlers[random].click();
}

function kill(){
  imageMonstre.src="monstreMort.jpg"; //changement d'image
  life = 0;
  displayStatus(life, money, awake);
  log("Le monstre vient de mourir.");
}

function newLife(){
  if (life <= 0){
    go();
  }
  else{
    log("Le monstre est encore en vie.")
  }
}

window.onload = go; //lance la fonction go quand la page se charge

window.addEventListener('load', function() {
  boutonNewLife.addEventListener('click', newLife); //lance la fonction go quand on click sur new life
  boutonRun.addEventListener('click', run);//lance la fonction run quand on click sur run
  boutonFight.addEventListener('click', fight);//lance la fonction fight quand on click sur fight
  boutonWork.addEventListener('click', work);//lance la fonction work quand on click sur work
  boutonEat.addEventListener('click', eat);//lance la fonction eat quand on click sur eat
  boutonSleep.addEventListener('click', sleep);//lance la fonction sleep quand on click sur sleep
  boutonShow.addEventListener('click', showme);//lance la fonction showme quand on click sur show
  boutonKill.addEventListener('click', kill);//lance la fonction kill quand on click sur kill
  setInterval(hasard,12000);//lance la fonction hasard toutes les 12 s
});

document.body.onkeyup = function(e){ //permet d'afficher le alert quand on appuye sur la barre espace
    if(e.keyCode == 32){ //correspond à la barre espace
        alert("Le monstre fait les actions comme il le veut. Je pense que c'est mieux de le laisser agir tout seul, admirez-le vivre. Il fait une action toutes les 12 secondes");
    }
}
