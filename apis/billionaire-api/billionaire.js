// https://forbes400.onrender.com/
// Back to Homepage.
const homeBtn = document.querySelector("#home-btn");
homeBtn.addEventListener("click", () => {
  window.location.href = "../../index.html";
});

// API setup and logic.
function billioniarAPI() {
  let param = "?limit=10";
  return `https://forbes400.onrender.com/api/forbes400${param}`;
}

const listBtn = document.querySelector("#list-btn");
const billionaireListContainer = document.querySelector("#billionaire-list");

listBtn.addEventListener("click", function () {
  getData(billioniarAPI()).then((billionaires) => getBillionaire(billionaires));
});

function getBillionaire(billionaires) {
  console.log(billionaires[0]);
  for (const billionaire of billionaires) {
    billionaireListContainer.innerHTML += template(billionaire);
  }
}

const template = ({
  person: { name, uri },
  countryOfCitizenship,
  industries,
  rank,
  finalWorth,
  squareImage,
}) => {
  return `
    <tr>
      <td>${rank}</td>
      <td><a href="#${uri}" class="link link-primary">${name}</a></td>
      <td>${countryOfCitizenship}</td>
      <td>${industries}</td>
      <td>${finalWorth}</td>
    </tr>

    <div class="modal" id="${uri}">
      <div class="modal-box">
        <h3 class="text-lg font-bold">${name}</h3>
        <img src="${squareImage}" alt="${name}">
        <div class="modal-action">
          <a href="#" class="btn">Close</a>
        </div>
      </div>
    </div>
  `;
};
