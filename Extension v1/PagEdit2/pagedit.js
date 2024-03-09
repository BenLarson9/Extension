document.body.style.border = "2px solid blue";  //so we know

let c1 = "0#bbbbbb";
let loop;
let ikayThatsEnough = 45;

document.body.style.setProperty("overflow", "visible", "important");
//document.body.style.background = c1;

loop = setInterval(makeVisible, 1.2 * 1000);


//This is needed only if the Anti-AdBlockers remebered to make their property !important //jk !importance is ignored by javascript thankyouverymuch:(
function makeVisible() {
    //a promise here would be nice

    if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = "visible";
        console.log("It is now visible");
        console.log("I waited " + (45 - ikayThatsEnough) +" timeys for you")
        console.log(document.getElementsByClassName("fc-ab-root"));
        clearInterval(loop);
        element.remove(document.body.removeChild(document.getElementsByClassName("fc-ab-root")));
    } 
    else if (ikayThatsEnough <= 0) {
        clearInterval(loop);
        console.log("I can't wait forever");
    }
    /*else if (document.addEventListener('readystatechange', event) {
        
    }*/
    else {
        console.log("Not yet hidden");
        ikayThatsEnough--;

    }
}








/*
window.addEventListener("load", function () {

    setTimeout(1000);
    document.body.style.overflow = "visible";
});*/




//Object.freeze(document.body.style.overflow);  //this doesnt work but would be the best option
//confirm("Want to Scroll?");
//console.log("is visible now");
    //alert('Page is loaded');
    //removeChild("document.body.div.fc-ab-root");


/*
document.addEventListener('readystatechange', event => {

    // When HTML/DOM elements are ready:
    if (event.target.readyState === "interactive") {   //does same as:  ..addEventListener("DOMContentLoaded"..
        alert("hi 1");
    }

    // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
    if (event.target.readyState === "complete") {
        //alert("hi 2");
        setTimeout(1);
        document.body.style.overflow = "visible";
    }
});*/