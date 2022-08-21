import data from "./data.json" assert { type: "json" };
// console.log(data);

const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");

let cardTitlesArray = document.querySelectorAll(".card-title-name");
let currentTimeData = document.querySelectorAll(".current");
let previousTimeData = document.querySelectorAll(".previous");
let hours = "hrs";
let lastWeek = "Last week -";

init();

dailyBtn.addEventListener("click", init);
weeklyBtn.addEventListener("click", weekly);
monthlyBtn.addEventListener("click", monthly);

cardTitlesArray[0].innerHTML = data[0].title;
cardTitlesArray[1].innerHTML = data[1].title;
cardTitlesArray[2].innerHTML = data[2].title;
cardTitlesArray[3].innerHTML = data[3].title;
cardTitlesArray[4].innerHTML = data[4].title;
cardTitlesArray[5].innerHTML = data[5].title;

function init() {
  dailyBtn.classList.add("active");
  weeklyBtn.classList.remove("active");
  monthlyBtn.classList.remove("active");
  // Daily Current Data
  currentTimeData[0].innerHTML = `${data[0].timeframes.daily.current}${hours}`;
  currentTimeData[1].innerHTML = `${data[1].timeframes.daily.current}${hours}`;
  currentTimeData[2].innerHTML = `${data[2].timeframes.daily.current}${hours}`;
  currentTimeData[3].innerHTML = `${data[3].timeframes.daily.current}${hours}`;
  currentTimeData[4].innerHTML = `${data[4].timeframes.daily.current}${hours}`;
  currentTimeData[5].innerHTML = `${data[5].timeframes.daily.current}${hours}`;
  // Daily Previous Data
  previousTimeData[0].innerHTML = `${lastWeek} ${data[0].timeframes.daily.previous}${hours}`;
  previousTimeData[1].innerHTML = `${lastWeek} ${data[1].timeframes.daily.previous}${hours}`;
  previousTimeData[2].innerHTML = `${lastWeek} ${data[2].timeframes.daily.previous}${hours}`;
  previousTimeData[3].innerHTML = `${lastWeek} ${data[3].timeframes.daily.previous}${hours}`;
  previousTimeData[4].innerHTML = `${lastWeek} ${data[4].timeframes.daily.previous}${hours}`;
  previousTimeData[5].innerHTML = `${lastWeek} ${data[5].timeframes.daily.previous}${hours}`;
}

function weekly() {
  dailyBtn.classList.remove("active");
  weeklyBtn.classList.add("active");
  monthlyBtn.classList.remove("active");
  // weekly Current Data
  currentTimeData[0].innerHTML = `${data[0].timeframes.weekly.current}${hours}`;
  currentTimeData[1].innerHTML = `${data[1].timeframes.weekly.current}${hours}`;
  currentTimeData[2].innerHTML = `${data[2].timeframes.weekly.current}${hours}`;
  currentTimeData[3].innerHTML = `${data[3].timeframes.weekly.current}${hours}`;
  currentTimeData[4].innerHTML = `${data[4].timeframes.weekly.current}${hours}`;
  currentTimeData[5].innerHTML = `${data[5].timeframes.weekly.current}${hours}`;
  // weekly Previous Data
  previousTimeData[0].innerHTML = `${lastWeek} ${data[0].timeframes.weekly.previous}${hours}`;
  previousTimeData[1].innerHTML = `${lastWeek} ${data[1].timeframes.weekly.previous}${hours}`;
  previousTimeData[2].innerHTML = `${lastWeek} ${data[2].timeframes.weekly.previous}${hours}`;
  previousTimeData[3].innerHTML = `${lastWeek} ${data[3].timeframes.weekly.previous}${hours}`;
  previousTimeData[4].innerHTML = `${lastWeek} ${data[4].timeframes.weekly.previous}${hours}`;
  previousTimeData[5].innerHTML = `${lastWeek} ${data[5].timeframes.weekly.previous}${hours}`;
}

function monthly() {
  dailyBtn.classList.remove("active");
  weeklyBtn.classList.remove("active");
  monthlyBtn.classList.add("active");
  // monthly Current Data
  currentTimeData[0].innerHTML = `${data[0].timeframes.monthly.current}${hours}`;
  currentTimeData[1].innerHTML = `${data[1].timeframes.monthly.current}${hours}`;
  currentTimeData[2].innerHTML = `${data[2].timeframes.monthly.current}${hours}`;
  currentTimeData[3].innerHTML = `${data[3].timeframes.monthly.current}${hours}`;
  currentTimeData[4].innerHTML = `${data[4].timeframes.monthly.current}${hours}`;
  currentTimeData[5].innerHTML = `${data[5].timeframes.monthly.current}${hours}`;
  // monthly Previous Data
  previousTimeData[0].innerHTML = `${lastWeek} ${data[0].timeframes.monthly.previous}${hours}`;
  previousTimeData[1].innerHTML = `${lastWeek} ${data[1].timeframes.monthly.previous}${hours}`;
  previousTimeData[2].innerHTML = `${lastWeek} ${data[2].timeframes.monthly.previous}${hours}`;
  previousTimeData[3].innerHTML = `${lastWeek} ${data[3].timeframes.monthly.previous}${hours}`;
  previousTimeData[4].innerHTML = `${lastWeek} ${data[4].timeframes.monthly.previous}${hours}`;
  previousTimeData[5].innerHTML = `${lastWeek} ${data[5].timeframes.monthly.previous}${hours}`;
}
