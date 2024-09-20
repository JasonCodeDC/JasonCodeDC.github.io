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

function test() {
    string = ""
    for (let i = 0; i <= 1000000; i++) {
        string = string + i.toString()
    }
    document.getElementsById("testcontainer").innerHTML = string
}