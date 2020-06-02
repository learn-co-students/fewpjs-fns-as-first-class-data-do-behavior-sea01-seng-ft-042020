/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(string) {
  let timeSplit = string.split(":");
  let timeArr = parseInt(timeSplit);
  while (timeArr < 12) {
    return "Good Morning";
  }
  while (timeArr >= 12 && timeArr < 17) {
    return "Good Afternoon";
  }
  while (timeArr >= 17) {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(poop) {
  document.querySelector('#greeting').innerText = poop
}
