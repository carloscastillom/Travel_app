
function removeTrip(event) {
    event.preventDefault()

    document.getElementById("trip").innerHTML = "";
    document.getElementById("nDays").innerHTML = "";
    document.getElementById("tLength").innerHTML = "";
    document.getElementById("searchedImg").src="";
    document.getElementById("Temperature").innerHTML = "";

}






export { removeTrip }