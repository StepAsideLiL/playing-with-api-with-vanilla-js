const cardContainerElement = document.querySelector("#card-container");

for (const projectCard of projectCards) {
  cardContainerElement.innerHTML += projectCardsTemplate(projectCard);
}

function redirectPage(URL) {
  window.location.href = URL;
}
