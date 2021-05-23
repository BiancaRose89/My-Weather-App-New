let dateElement = document.querySelector("#todaysDate");
let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

let day = currentTime.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

dateElement.innerHTML = `${days[day]} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  let h2 = document.querySelector("h2");
  if (searchInput.value) {
    h2.innerHTML = `${searchInput.value} Weather `;
  } else {
    h2.innerHTML = null;
    alert("lets try again! ");
  }
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);
//

function showWeather(response) {
  let h2 = document.querySelector("h2");
  let button = document.querySelector("#cwbutton");
  let temperature = Math.round(response.data.main.temp);
  h2.innerHTML = `It is currently ${temperature}° in ${response.data.name} !`;
  button.addEventListener("click", showWeather);
}

function getPosition(position) {
  let apiKey = "610fa156b422a9e0e7888daca545173c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

navigator.geolocation.getCurrentPosition(getPosition);
