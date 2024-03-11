document.body.style.backgroundColor = "yellow";
var button = document.getElementById("button1");
button.style.visibility = "visible";



/*
var button1 = document.getElementById("overflow-button");
if (button1) button1.addEventListener("click", aler);
function aler() { alert('a'); }
*/




/*async function fetchData() {
    const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
    const record=await res.json();
    document.getElementById("date").innerHTML=record.data[0].date;
    document.getElementById("areaName").innerHTML=record.data[0].areaName;
    document.getElementById("latestBy").innerHTML=record.data[0].latestBy;
    document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
}
fetchData();*/