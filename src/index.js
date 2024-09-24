setInterval(function () {
  let capetownElement = document.querySelector("#cape-town");
  let capetownDateElement = capetownElement.querySelector(".date");
  let capetownTimeElement = capetownElement.querySelector(".time");
  capetownDateElement.innerHTML = moment().format("Do MMMM YYYY");
  capetownTimeElement.innerHTML = moment()
    .tz("Africa/Cape_Town")
    .format("H:mm:ss [<small>]A[</small>]");

  let gaboroneElement = document.querySelector("#gaborone");
  let gaboroneDateElement = gaboroneElement.querySelector(".date");
  let gaboroneTimeElement = gaboroneElement.querySelector(".time");
  gaboroneDateElement.innerHTML = moment().format("Do MMMM YYYY");
  gaboroneTimeElement.innerHTML = moment()
    .tz("Africa/Gaborone")
    .format("H:mm:ss [<small>]A[</small>]");
}, 1000);
