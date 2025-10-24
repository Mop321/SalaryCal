const short = console.log;
let hours = JSON.parse(localStorage.getItem("hours")) || [];
let dates = JSON.parse(localStorage.getItem("date")) || [];
const varibles = {
  hoursInput: document.querySelector(".input1"),
  dateInput: document.querySelector(".input2"),
  clearInput: document.querySelector(".input3"),
  submitHours: document.querySelector(".submit1"),
  submitClear: document.querySelector(".submit3"),
  resultDiv: document.querySelector(".results"),
  finalDiv: document.querySelector(".result"),
};
const {
  hoursInput,
  dateInput,
  clearInput,
  submitHours,
  submitClear,
  resultDiv,
  finalDiv,
} = varibles;
function clicks() {
  function insideClick() {
    let hoursValue = Number(hoursInput.value);
    let dateValue = dateInput.value;
    if (hoursValue && dateValue) {
      hours.push(hoursValue);
      localStorage.setItem("hours", JSON.stringify(hours));
      dates.push(dateValue);
      localStorage.setItem("date", JSON.stringify(dates));
      dateInput.value = "";
      hoursInput.value = "";
      result();
    } else if (!hoursValue || !dateValue) {
      document.body.innerHTML = "<h1>Error<h1/>";
    }
  }
  submitHours.addEventListener("click", () => {
    insideClick();
  });
  document.body.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      insideClick();
    }
  });
}
submitClear.addEventListener("click", () => {
  localStorage.clear();
});

function result() {
  let html = "";
  let total = 0;
  hours.forEach((hour, index1) => {
    dates.forEach((currentDate, index2) => {
      if (index1 === index2) {
        html += `<div class="result-item">Date: ${currentDate} - Hours: ${hour}</div>`;
        total += hour * 40;
      }
    });
  });
  resultDiv.innerHTML = html;
  finalDiv.innerHTML = `Total Paycheck: ${Math.round(total)}`;
}
result();
clicks();
