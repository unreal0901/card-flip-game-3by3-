document.addEventListener("DOMContentLoaded", () => {
  // cards
  const cardArray = [
    {
      name: "eren",
      img: "images/eren.png",
    },
    {
      name: "eren",
      img: "images/eren.png",
    },
    {
      name: "goku",
      img: "images/goku.jpg",
    },
    {
      name: "goku",
      img: "images/goku.jpg",
    },
    {
      name: "mikasa",
      img: "images/mikasa.jpg",
    },
    {
      name: "mikasa",
      img: "images/mikasa.jpg",
    },
    {
      name: "naruto",
      img: "images/naruto.jpg",
    },
    {
      name: "naruto",
      img: "images/naruto.jpg",
    },
    {
      name: "one",
      img: "images/one.jpg",
    },
    {
      name: "one",
      img: "images/one.jpg",
    },
    {
      name: "zero2",
      img: "images/zero2.jpg",
    },
    {
      name: "zero2",
      img: "images/zero2.jpg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];
  const resultDisplay = document.querySelector("#result");
  // create board

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/cardback.jpeg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }
  // cheack for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/cardback.jpeg");
      cards[optionTwoId].setAttribute("src", "images/cardback.jpeg");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/cardback.jpeg");
      cards[optionTwoId].setAttribute("src", "images/cardback.jpeg");
      alert("sorry try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "congratulations You found them all";
    }
  }

  // flip card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
