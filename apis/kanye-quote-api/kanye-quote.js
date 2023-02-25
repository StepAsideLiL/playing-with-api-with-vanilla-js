// Back to Homepage.
const homeBtn = document.querySelector("#home-btn");
homeBtn.addEventListener("click", () => {
  window.location.href = "../../index.html";
});

// API setup and logic.
const kanyeAPI = "https://api.kanye.rest/";

const kanyeSayElement = document.querySelector("#kanye-say");
const quoteContainerElement = document.querySelector("#quote-container");

kanyeSayElement.style.color = randomColor();

function getQuote({ quote }) {
  quoteContainerElement.innerText = quote;
}

document.querySelector("#change-btn").addEventListener("click", () => {
  getData(kanyeAPI).then((data) => getQuote(data));
});

getData(kanyeAPI).then((data) => getQuote(data));
