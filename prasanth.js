// // Number of checkboxes checking function
maintanance = 1500;
function getTotalServices() {
  var count = 0;
  var checkboxes = document.getElementsByClassName("types");
  for (i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
      count++;
    }
  }
  document.getElementById("num").innerHTML =
    "No of services selected: " + count;
  return count;
}

// // Amount calculating function for their selected services

function getServiceCost() {
  sum = 0;
  var checkboxes = document.getElementsByClassName("types");
  for (i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked == true) {
      sum = sum + parseInt(checkboxes[i].value);
    }
  }
  document.getElementById("Cost").innerHTML = "Service Cost :" + sum;
  return sum;
}

// //Yearly maintenance subscribers get discount function

function getYearlyMaintenanceCost() {
  var result = 0;
  if (document.getElementById("maintenance").checked == true) {
    result = document.getElementById("maintenance").value;
    document.getElementById("main").innerHTML = "Maintenace Cost :" + result;
  }
  totalcost = getServiceCost();
  totalcost = totalcost + parseInt(result);
  document.getElementById("S&M").innerHTML =
    "Estimated service price with maintenace  :" + totalcost;

  return totalcost;
}

// //Discount calculate function
function calculateDiscount() {
  var servicecost = getServiceCost();
  var counts = getTotalServices();
  var discount = 0;
  if (counts > 2) {
    discount = servicecost - (servicecost * 15) / 100;
    document.getElementById("discount").innerHTML =
      "Discount price provided for yearly :" +
      (Math.round(discount) + maintanance);
    return discount;
  } else {
    price = getServiceCost();
    document.getElementById("discount").innerHTML =
      "Discount price not provided because you have choose 2 services :" +
      (price + maintanance);
    return discount;
  }
}

// // submit button function
function bookAppointment() {
  event.preventDefault();
  getServiceCost();
  getTotalServices();
  getYearlyMaintenanceCost();
  calculateDiscount();
}
