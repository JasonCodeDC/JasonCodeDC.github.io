function showTimesTables() {
    const num = document.getElementById("number").value;
    const num2 = document.getElementById("number2").value;
    let printstring = "";
    for (let i = 1; i <= num2; i++) {
        printstring = printstring + "<p>" + i.toString() + " times " + num.toString() + " equals " + (i*num).toString() + "</p>" 
    }
    document.getElementById("timestables").innerHTML = printstring
    return false
}