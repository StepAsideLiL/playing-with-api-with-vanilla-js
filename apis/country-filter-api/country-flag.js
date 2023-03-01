// Back to Homepage.
const homeBtn = document.querySelector("#home-btn");
homeBtn.addEventListener("click", () => {
  window.location.href = "../../index.html";
});

// API setup and logic.
const filterByOption = document.querySelector("#filter-by-option");
const filterTextField = document.querySelector("#filter-text-field");
const filterBtn = document.querySelector("#filter-btn");
const countryContainerElement = document.querySelector("#country-container");
const loadingElement = document.querySelector("#loading");
const notFoundElement = document.querySelector("#not-found");

filterTextField.disabled = true;

filterByOption.addEventListener("change", function () {
  notFoundElement.classList.add("hidden");
  if (this.value === "all") {
    filterTextField.disabled = true;
    filterBtn.disabled = false;
  } else {
    filterTextField.disabled = false;
    if (filterTextField.value === "") {
      filterBtn.disabled = true;
    } else {
      filterBtn.disabled = false;
    }
  }
});

filterTextField.addEventListener("keyup", function (event) {
  notFoundElement.classList.add("hidden");
  if (this.value === "") {
    filterBtn.disabled = true;
  } else {
    filterBtn.disabled = false;
    if (event.key === "Enter") {
      countryContainerElement.innerHTML = "";
      loadingElement.classList.remove("hidden");
      getData(countryAPI(filterByOption, filterTextField)).then((countrys) => {
        getCountry(countrys);
      });
    }
  }
});

function countryAPI(option, search) {
  let optionValue = option.value;
  let searchValue = search.value;
  if (search.disabled === true) {
    searchValue = "";
  }
  return `https://restcountries.com/v3.1/${optionValue}/${searchValue}`;
}

filterBtn.addEventListener("click", function () {
  countryContainerElement.innerHTML = "";
  notFoundElement.classList.add("hidden");
  loadingElement.classList.remove("hidden");
  getData(countryAPI(filterByOption, filterTextField)).then((countrys) => {
    getCountry(countrys);
  });
});

function getCountry(countrys) {
  console.log(countrys);
  loadingElement.classList.add("hidden");
  if (countrys.status === 404) {
    notFoundElement.classList.remove("hidden");
  }
  for (const country of countrys) {
    countryContainerElement.innerHTML += template(country);
  }
}

function template(country) {
  const { name, flags, region, capital } = country;
  if ("capital" in country) {
    return `
      <div class="shadow-xl card bg-base-100">
        <figure class="px-10 pt-10">
          <img src="${flags.png}" alt="${flags.alt}" class="rounded-xl" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${name.common}</h2>
          <p>Official: <span class="font-semibold">${name.official}</span></p>
          <p>Capital:
            <span class="font-semibold">${[...capital].join(", ")}</span>
          </p>
          <p>Region: <span class="font-semibold">${region}</span></p>
        </div>
      </div>
    `;
  } else {
    return `
      <div class="shadow-xl card bg-base-100">
        <figure class="px-10 pt-10">
          <img src="${flags.png}" alt="${flags.alt}" class="rounded-xl" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${name.common}</h2>
          <p>Official: <span class="font-semibold">${name.official}</span></p>
          <p>Capital:
            <span class="font-semibold text-red-700">No Capital</span>
          </p>
          <p>Region: <span class="font-semibold">${region}</span></p>
        </div>
      </div>
    `;
  }
}
