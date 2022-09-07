function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  var session = document.getElementById("session");

  document.getElementById("second").innerHTML = seconds;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("hour").innerHTML = hours;
  if (hours >= 12) {
    session.innerHTML = "PM";
  } else {
    session.innerHTML = "AM";
  }
}

setInterval(setDate, 1000);
