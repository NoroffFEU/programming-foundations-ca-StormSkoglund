var budgie = {
  type: "Bird",
  species: "Parrot",
  noiseLevel: "High",
  name: "Ove",
  colors: "Pale blue and yellow/green",
  age: 3.5,
  hobbies: [
    "Biting",
    " Screaming",
    " Singing",
    " Swinging",
    " Fighting",
    " Millet",
    " listening to music by John Mayer",
  ],
  friends: ["Olga", " Louise", " Alex"],
  domesticated: false,
  alwaysHungry: true,
  /*friendlyTowards: {
    things: true,
    people: "Sometimes",
    otherBudgies: false,
  },
  favoriteFood: [
    {
      type: "millet",
      brand: "random unnamed bags from the pet store",
    },
    {
      type: "mixed bird seeds and pellets",
      brand: "Versele-Laga Prestige",
    },
    {
      other: "What Olga is having",
    },
  ],*/
  featherFacts: function featherFacts() {
    document.getElementById("type").textContent = budgie.type;
    document.getElementById("species").textContent = budgie.species;
    document.getElementById("noiseLevel").textContent = budgie.noiseLevel;
    document.getElementById("name").textContent = budgie.name;
    document.getElementById("colors").textContent = budgie.colors;
    document.getElementById("age").textContent = budgie.age;
    document.getElementById("hobbies").textContent = budgie.hobbies;
    document.getElementById("friends").textContent = budgie.friends;
    document.getElementById("domesticated").textContent = budgie.domesticated;
    document.getElementById("alwaysHungry").textContent = budgie.alwaysHungry;
    /*document.getElementById("friendlyTowards").textContent =
      budgie.friendlyTowards;
    document.getElementById("favoriteFood").textContent = budgie.favoriteFood;*/
    var listOfFacts = document.querySelector("article");
    listOfFacts.style.display = "block";
  },
};

var buttonBite = document.querySelector(".bite");
var buttonFacts = document.querySelector(".fact-box");

var heading = document.querySelector(".pet");
var background = document.querySelector("body");

function newHeadingAndBackground() {
  heading.innerHTML = "You've been bitten";
  heading.style.fontSize = "xxx-large";
  background.style.backgroundColor = "red";
}
buttonBite.onclick = newHeadingAndBackground;
buttonFacts.onclick = budgie.featherFacts;
