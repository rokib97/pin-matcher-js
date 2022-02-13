function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}
function generateNumber(e) {
  const number = e.target.innerText;
  const calcInput = document.getElementById("typed-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
    if (number == "<") {
      calcInput.value = parseInt(calcInput.value / 10);
    }
  } else {
    // const calcInput = document.getElementById("typed-numbers");
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
}
function msgFinder(msgId) {
  return document.getElementById(msgId);
}

function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typedNumber = document.getElementById("typed-numbers").value;
  typedNumber.value = "";
  if (typedNumber == "") {
    return;
  }
  const successMsg = msgFinder("notify-success");
  const ErrorMsg = msgFinder("notify-failed");
  if (pin == typedNumber) {
    successMsg.style.display = "block";
    ErrorMsg.style.display = "none";
  } else {
    successMsg.style.display = "none";
    ErrorMsg.style.display = "block";
    const tryleft = document.getElementById("try");
    const tryleftCount = tryleft.innerText;
    tryleft.innerText = parseInt(tryleftCount) - 1;
    if (tryleft.innerText < 0) {
      ErrorMsg.style.display = "none";
      alert("Sorry Your do not have more than three chance");
      tryleft.innerText = 0;
    }
  }
}

document.getElementById("pin-generate").addEventListener("click", function () {
  generatePin();
});
document.getElementById("keypad").addEventListener("click", function (e) {
  generateNumber(e);
});

document.getElementById("submit-button").addEventListener("click", function () {
  verifyPin();
});
