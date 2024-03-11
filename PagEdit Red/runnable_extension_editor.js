document.body.style.border = "2px solid blue"; // "thick solid #0000FF";
var a = 50;
document.body.style.overflow = "hidden";
while (document.body.style.overflow = "hidden" && a > 0){
    document.body.style.overflow = "visible";
    a--;
    console.log("counting down " +a);
} 


console.log("its over");