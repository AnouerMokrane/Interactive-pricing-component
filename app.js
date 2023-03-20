let views = document.querySelector(".pageviews");
let range = document.querySelector(".myrange");
let progress = document.querySelector(".progress");
let price = document.querySelector(".price span");
let toggle = document.querySelector(".toggle");

let prices = [8, 12, 16, 24, 36];

price.textContent = `$${prices[range.value]}.00`;
progress.style.width = `${(100 / 4) * range.value}%`;

range.onchange = () => {
  price.textContent = `$${prices[range.value]}.00`;
  progress.style.width = `${(100 / 4) * range.value}%`;
};

toggle.onclick = () => {
  toggle.classList.toggle("yearly");
  if (toggle.classList.contains("yearly")) {
    price.textContent = `$${
      (parseInt(price.textContent.replace("$", 0)) * 25) / 100
    }.00`;
    console.log(price.textContent);
  } else {
    price.textContent = `$${prices[range.value]}.00`;
  }
};
