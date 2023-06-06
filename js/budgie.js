var budgie = {
  type: "bird",
  species: "parrot",
  noiseLevel: "high",
  name: "Ove",
  colors: "pale blue and yellow/green",
  age: 3.5,
  hobbies: [
    "Biting",
    "Screaming",
    "Singing",
    "Swinging",
    "Fighting",
    "Millet",
    "listening to music by John Mayer",
  ],
  friends: ["Olga", "Louise", "Alex"],
  domesticated: false,
  alwaysHungry: true,
  friendlyTowards: {
    things: true,
    people: "sometimes",
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
  ],
};

var button = document.querySelector("button");
var heading = document.querySelector("h2");
var background = document.querySelector("body");

function newHeadingAndBackground() {
  heading.innerHTML = "You've been bitten";
  heading.style.fontSize = "xxx-large";
  background.style.backgroundColor = "red";
}

button.onclick = newHeadingAndBackground;
