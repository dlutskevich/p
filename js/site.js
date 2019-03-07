function firstButtonClickHandler() {
  const cards = document.getElementsByClassName("card");

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i].firstElementChild;
    card.className = "";
    card.classList.add(GetRandomThemeClass());
  }
}

function GetRandomThemeClass() {
  return ThemeClasses[getRndInteger(0, ThemeClasses.length)];
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const ThemeClasses = ["red", "green", "blue", "white"];

const but1 = document.getElementById("but1");
but1.onclick = firstButtonClickHandler;
