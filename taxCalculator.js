"use strict";
const getErrorMsgTax = lbl => `${lbl} must be a valid number greater than zero and less than 100.`;
var $ = function(id) {
    return document.getElementById(id);
};
var calculateTotal = function(sales,tax) {
    var subtotal = sales * tax/100;
    var total = subtotal + sales;
    total = total.toFixed(2);
    return total;
    };
var processEntries = function(){
    var sales = parseFloat($("sales").value);
    var tax = parseFloat($("tax").value);
    if (isNaN(sales) || isNaN(tax)) {
        alert("Both entries must be numeric");
    } else if (sales <= 0 ) {
      alert("Entries must be greater than zero");
    } else if (tax <= 0 || tax >= 100) {
        alert("Must be between 1-100");
    }   
    else {
        $("total").value = calculateTotal(sales,tax);
    }
};
window.onload = function() {
    $("calculate").onclick = processEntries;
    $("sales").focus();
};