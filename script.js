function compute()
{
    p = document.getElementById("principal").value;
    var principal = document.getElementById("principal");
    // Check validity of principa: postivity
    if(principal.value <= 0){
        alert("Enter a positive number");
        principal.focus();
        return false;
  }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    // Calculate the amount of interest
    var interest = principal.value * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    // Send the results to HTML
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal.value+"</mark>,\<br\>at an interest rate of <mark>"+rate+"% </mark>\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"


}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
