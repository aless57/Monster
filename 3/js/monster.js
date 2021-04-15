var name;
var life;
var money;
var awake; //true réveillé

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
  if (awake){
   test = "réveillé";
  }else{
   test = "endormi";
  }
  document.getElementById("status").innerHTML = "<li>Life :" + life + " </li><li>Money : "+money+" </li><li>" + test + "</li>" //écriture
}

function go(){ //fonction de lancement des autres fonctions
  init('Casper',10,5);
  showme();
}

function run(){ //fonction run qui permet de courir
  if (!awake){
    log("Le monstre ne peut pas courir, il dort.");
  }
  if (life>0 && awake){
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
    money=money-3;
    life=life+2;
    log("Le monstre mange.")
  }
  displayStatus(life, money, awake);
}

function sleep() { //fonction sleep pour endormir le monstre
  awake = false;
  log("Le monstre dort.");
  displayStatus(life, money, awake);
  setTimeout(nosleeping,7000);
  displayStatus(life, money, awake);
}

function nosleeping() { //fonction nosleeping pour réveillé le monstre
  awake = true;
  log("Le monstre se réveille.");
  life++;
}

window.onload = go; //lance la fonction go quand la page se charge

window.addEventListener('load', function() {
  document.querySelector("#b1").addEventListener('click', go); //lance la fonction go quand on click sur new life
  document.querySelector("#b2").addEventListener('click', run);//lance la fonction run quand on click sur run
  document.querySelector("#b3").addEventListener('click', fight);//lance la fonction fight quand on click sur fight
  document.querySelector("#b7").addEventListener('click', work);//lance la fonction work quand on click sur work
  document.querySelector("#b5").addEventListener('click', eat);//lance la fonction eat quand on click sur eat
  document.querySelector("#b4").addEventListener('click', sleep);//lance la fonction sleep quand on click sur sleep
});
