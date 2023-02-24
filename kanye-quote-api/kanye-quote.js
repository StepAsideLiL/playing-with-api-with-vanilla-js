const kanyeAPI = "https://api.kanye.rest/";

const kanyeSayElement = document.querySelector("#kanye-say");
const quoteContainerElement = document.querySelector("#quote-container");

kanyeSayElement.style.color = randomColor();

const loadAPI = (API) => {
  fetch(API)
    .then((res) => res.json())
    .then((data) => getQuote(data));
};

function getQuote(quote) {
  quoteContainerElement.innerText = quote.quote;
}

document.querySelector("#change-btn").addEventListener("click", () => {
  loadAPI(kanyeAPI);
});

loadAPI(kanyeAPI);
