function calcTip(bill){

var tip = document.getElementById("tip");
var bill = document.getElementById("bill").value;
tip.innerHTML = "$"+(bill * .2).toFixed(2);

}
