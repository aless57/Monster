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

function showme(){ //affiche une boite d'alerte avec les valeurs des variables
  let test;
  if (awake){
   test = "réveillé";
  }else{
   test = "endormi";
  }
  alert("Propriété du monstre : son nom est " + name + " sa vie est égale à " + life + " il possède " + money + " euros et il est " + test);
}
