const ticketType = document.getElementById("ticket-type");
const quantity = document.getElementById("quantity");
const calculateButton = document.getElementById("calculate");
const result = document.getElementById("result");

function calculatetotalamount() {
  "use strict";
  const ticketprice = parseFloat(ticketType.value);
  const ticketamount = parseInt(quantity.value, 10);
  function showError(message) {
    result.className = "error";
    result.style.display = "block";
    result.textContent = message;
  }

  if (isNaN(ticketamount) || ticketamount < 1) {
    showError("Quantity must be 1 or greater");
    return;
  }

  const subTotal = ticketprice * ticketamount;

  let thediscount = 0;
  if (ticketamount >= 10) {
    thediscount = subTotal * 0.1;
  }
  const the_booking_fee = 2.5;
  const totalamount = subTotal - thediscount + the_booking_fee;

  result.className = "";
  let resultHtml = "<p>Subtotal: $" + subTotal.toFixed(2) + "</p>";

  if (thediscount > 0) {
    resultHtml += "<p>Group Discount (10%): $" + thediscount.toFixed(2) + "</p>";
  }
  resultHtml += "<p>Booking Fee: $" + the_booking_fee.toFixed(2) + "</p>";
  resultHtml += "<p><strong>Total: $" + totalamount.toFixed(2) + "</strong></p>";
  result.innerHTML = resultHtml;
}
calculateButton.addEventListener("click", calculatetotalamount);
