/**
 * Array of objects containing API project card data.
 */
const projectCards = [
  {
    name: "Kanye Quote",
    description: "Randomly shows quotes the great Kanye West said",
    imageURL: "./assets/images/kanye-quotes.png",
    URL: "./apis/kanye-quote-api/index.html",
  },
  {
    name: "Country Flags",
    description: "List of country and their flags",
    imageURL: "./assets/images/country-flags.png",
    URL: "./apis/country-flag-api/index.html",
  },
  {
    name: "Country Filter",
    description: "Listing country using filter",
    imageURL: "./assets/images/country-filter.png",
    URL: "./apis/country-filter-api/index.html",
  },
  {
    name: "Billionaire",
    description: "Who are the Billionaires",
    imageURL: "./assets/images/top-one.png",
    URL: "./apis/billionaire-api/index.html",
  },
];

/**
 * Template of project card.
 * @param {object} Object destrucring of projectCards.
 * @returns string
 */
function projectCardsTemplate({ name, description, imageURL, URL }) {
  return `
    <div class="shadow-xl card bg-base-100">
      <figure class="px-10 pt-10">
        <img src="${imageURL}" alt="${name}" class="rounded-xl" />
      </figure>
      <div class="items-center text-center card-body">
        <h2 class="card-title">${name}</h2>
        <p>${description}</p>
        <div class="card-actions">
          <button class="btn btn-primary" onclick="redirectPage('${URL}')">Go the the Project</button>
        </div>
      </div>
    </div>
  `;
}
