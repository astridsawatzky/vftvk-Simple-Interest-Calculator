function calculateInterest(principal, years, rate) {

    return Math.floor(principal * years * rate) / 100;
}
module.exports = calculateInterest;
function compute() {

    //Get the values and calculate
    if(isPrincipalBiggerThanZero()) {
        var principal = parseFloat(document.getElementById("principal").value);
        var rate = parseFloat(document.getElementById("rate").value);
        var years = parseInt(document.getElementById("years").value);
        var interest = calculateInterest(principal, years, rate);
        var yearInTheFuture = new Date().getFullYear() + years;
        //Create the Interest text
        document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark><br/>" +
            "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
            "you will receive an amount of <mark>" + interest + "</mark><br/> " +
            "in the year <mark>" + yearInTheFuture + "</mark>.";
    } else {
        alertWrongEntryForPrincipal();
    }
}

//update the rate value
function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value +"%";
}

function isPrincipalBiggerThanZero() {
    const principal = document.getElementById("principal").value;
    return parseInt(principal) > 0;
}

function alertWrongEntryForPrincipal() {
   if(!alert("Enter a positive number")) {
       document.getElementById("result").innerHTML ="";
       document.getElementById("principal").focus();
   }
}

//Check for positive values
function validateAmount() {
    if (!isPrincipalBiggerThanZero()) {
        alertWrongEntryForPrincipal();
    }

}
