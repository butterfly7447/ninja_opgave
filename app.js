let data = [];
let index = 0;

const titleEl = document.getElementById("title");
const subtitleEl = document.getElementById("subtitle");
const textEl = document.getElementById("text");
const counterEl = document.getElementById("counter");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Load JSON
fetch("data.json")
  .then(res => res.json())
  .then(json => {
    data = json;
    updateUI();
  });

// UI function
function updateUI() {
  titleEl.textContent = data[index].title;
  textEl.textContent = data[index].text;

  // 2-cifret / 01, 02, 03
  counterEl.textContent = String(index + 1).padStart(2, "");
}

// Arrow buttons
nextBtn.addEventListener("click", () => {
  index++;
  if (index >= data.length) index = 0;
  updateUI();
});

prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) index = data.length - 1;
  updateUI();
});
