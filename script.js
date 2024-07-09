function ClearFunction() {
    document.getElementById("text1").innerHTML = "Its gone now";
    const newbutton = document.getElementById("ButtonsDiv");
    const button1 = document.createElement("button");
    const b1text = document.createTextNode("Undo");
    
    button1.onclick = "ReturnFunction()"
    button1.setAttribute("id", "UndoButton");
    
    button1.appendChild(b1text);
    newbutton.appendChild(button1);
}
var text1 = document.getElementById("text1");
text1.onmouseover = function(){
	text1.style.backgroundColor = "red";
	text1.setAttribute("class", "text2");
}

text1.onmouseout = function(){
	text1.style.backgroundColor = "";
	text1.setAttribute("class", "text");
}
function ReturnFunction(){
	document.getElementById("text1").innerHTML = "Oh no, Its back!";
	
}