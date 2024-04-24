//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {

function showDate() {
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let month = months[d.getMonth()];
let date = d.getDate();
document.getElementById("date").innerHTML = date	+ " " + month + " " + d.getFullYear() ;
}



})


function showError() {
 var x = document.getElementById("errorDiv");
 if (x.style.display === "none") {
  x.style.display = "block";
} else {
 x.style.display = "none";
 }

 var y = document.getElementById("income-error");
 if (y.style.display === "none") {
  y.style.display = "block";
} else {
 y.style.display = "none";
 }

 var z = document.getElementById("expenses-error");
 if (z.style.display === "none") {
  z.style.display = "block";
} else {
 z.style.display = "none";
 }



 var element = document.getElementById("income-heading");
element.classList.add("govuk-form-group--error");




var element = document.getElementById("expenses-heading");
  element.classList.add("govuk-form-group--error");



}


function showErrorIncome() {
 var x = document.getElementById("errorDivIncome");
 if (x.style.display === "none") {
  x.style.display = "block";
} else {
 x.style.display = "none";
 }

 var y = document.getElementById("income-error");
 if (y.style.display === "none") {
  y.style.display = "block";
} else {
 y.style.display = "none";
 }

 var element = document.getElementById("income-heading");
 element.classList.add("govuk-form-group--error");
}

function showErrorExpenses() {
 var x = document.getElementById("errorDivExpenses");
 if (x.style.display === "none") {
  x.style.display = "block";
} else {
 x.style.display = "none";
 }

 var y = document.getElementById("expenses-error");
 if (y.style.display === "none") {
  y.style.display = "block";
} else {
 y.style.display = "none";
 }

 var element = document.getElementById("expenses-heading");
 element.classList.add("govuk-form-group--error");
}
