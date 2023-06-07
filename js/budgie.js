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
/* The last element in the function above was added in order to show the object when the function gets called upon, the HTML element, called article, will otherwise stay hidden.
in order to achieve this, i followed the short tutorial on this website https://www.shecodes.io/athena/3469-how-to-display-text-when-a-button-is-clicked-with-javascript [viewed on 07-06-2023], NB I found out that this site is driven by a chatbot of sorts,  I didn't know this initially, it seemed like a regular coding blog, I am unsure if this is acceptable. Full disclaimer, I didn't tell a bot or anything to generate code, I found this in a discussion thread. */

// The variables for both buttons are defined underneath, they will make interaction with functions possible.

var buttonBite = document.querySelector(".bite");
var buttonFacts = document.querySelector(".fact-box");
// Selecting the body and h2 element, they will be a part of one of the functions.
var heading = document.querySelector(".pet");
var background = document.querySelector("body");
//Function whereas you get bitten by Ove the budgie, if you try to pet him (Background changes color to red and a warning text appears).

function newHeadingAndBackground() {
  heading.innerHTML = "You've been bitten";
  heading.style.fontSize = "xxx-large";
  background.style.backgroundColor = "red";
}
//Calling both functions, the first function controls the bite warning and background color, the second makes the object appear as a list
buttonBite.onclick = newHeadingAndBackground;
buttonFacts.onclick = budgie.featherFacts;
