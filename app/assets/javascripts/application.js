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
