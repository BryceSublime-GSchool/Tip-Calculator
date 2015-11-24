function calcTip(bill){

var tip = document.getElementById("tip");
var bill = document.getElementById("bill").value;
var percentage = document.getElementById("percentage").value;
tip.innerHTML = "$"+ (bill * percentage).toFixed(2);

}
