

function retrieveContacts() {
  var queryURL = "https://jsonplaceholder.typicode.com/users";

  fetch(queryURL)
    .then(function(response) {
      
      return response.json();
    })
    .then(function(contacts) {
      // contacts is a JavaScript object here
      buildTable(contacts);
    })
    .catch(function(error) {
      console.log("Error during fetch: " + error.message);
    });
}

function hideClearButton() {
  b = document.querySelector("#clear-button");
  if (!b.classList.contains("hide")) {
    b.classList.toggle("hide");
  }
}

function clearTable() {
  document.querySelector("#tableContactBody").innerHTML = "";
  hideClearButton();
}

function showClearButton() {
  b = document.querySelector("#clear-button");
  b.classList.toggle("hide");
}

function buildTable(contacts) {
  // Clear out the table body first.
  clearTable();

  // Add the table content.
  // addLineToHTMLTable(element.fname, element.lname)
  contacts.forEach(function(curr) {
    addLineToHTMLTable(curr.name, curr.email);
  });

  showClearButton();
}

// Add a line to the HTML table
function addLineToHTMLTable(firstName, lastName) {
  // Get the body of the table using the selector API
  var tableBody = document.querySelector("#tableContactBody");

  // Add a new row at the end of the table
  var newRow = tableBody.insertRow();

  // add  new cells to the row
  var firstNameCell = newRow.insertCell();
  firstNameCell.innerHTML = firstName;

  var lastNameCell = newRow.insertCell();
  lastNameCell.innerHTML = lastName;
}