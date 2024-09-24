setInterval(function () {
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  sydneyDateElement.innerHTML = moment().format("Do MMMM YYYY");
  sydneyTimeElement.innerHTML = moment()
    .tz("Australia/Sydney")
    .format("H:mm:ss [<small>]A[</small>]");

  let gaboroneElement = document.querySelector("#gaborone");
  let gaboroneDateElement = gaboroneElement.querySelector(".date");
  let gaboroneTimeElement = gaboroneElement.querySelector(".time");
  gaboroneDateElement.innerHTML = moment().format("Do MMMM YYYY");
  gaboroneTimeElement.innerHTML = moment()
    .tz("Africa/Gaborone")
    .format("H:mm:ss [<small>]A[</small>]");
}, 1000);

function updateCity(event) {
    let cityTimezone = event.target.value;
    if (cityTimezone === "current") {
        cityTimezone = moment.tz.guess();
    }
    let cityName = cityTimezone.replace("_", "").split("/")[1];
    let cityTime = moment().tz(cityTimezone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `<div class="city" id="gaborone">
    <div>
<h2>${cityName}</h2>
<div class="date">${cityTime.format("Do MMMM YYYY")}</div>
</div>
<div class="time"> ${cityTime.format("H:mm:ss")} <small>${cityTime.format(
      "A"
    )}</small></div>
</div>
 </div>
    </div>`;
}
let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
