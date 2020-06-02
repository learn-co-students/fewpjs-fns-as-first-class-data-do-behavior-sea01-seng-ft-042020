/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  time = time.split(':')[0]
  if (time < 12) {return "Good Morning"}
  else if (time < 17) {return "Good Afternoon"}
  else {return "Good Evening"}
}

function displayMessage(message) {
  document.getElementById('greeting').innerText = message
}