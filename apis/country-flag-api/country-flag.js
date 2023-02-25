// Back to Homepage.
const homeBtn = document.querySelector("#home-btn");
homeBtn.addEventListener("click", () => {
  window.location.href = "../../index.html";
});

// API setup and logic.
const countryAPI = "https://restcountries.com/v3.1/all";

const countryContainerElement = document.querySelector("#country-container");

getData(countryAPI).then((data) => getCountry(data));

function getCountry(countrys) {
  for (const country of countrys) {
    countryContainerElement.innerHTML += template(country);
  }
}

function template({ name, flags }) {
  return `
  <div class="card bg-base-100 shadow-xl">
    <figure class="px-10 pt-10">
      <img src="${flags.png}" alt="Shoes" class="rounded-xl" />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">${name.common}</h2>
    </div>
  </div>
  `;
}
