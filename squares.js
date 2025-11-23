window.onload=function(){
    var add= document.getElementById("add");
    add.onclick = addSquare;

    var colors= document.getElementById("colors")
    add.onclick = changeColors;

    var squareCount = parseInt(Math.random()*21)+30;
    for(let i = 0; i < squareCount; i++) {
        addSquare();

    }
}

function getRandomColor(){
    var possibilites = "0123456789ABCDEF";
    var result="#";
    for(var i = 0; i < 6; i++)
    {
        result+=possibilites.charAt(parseInt(
            Math.random()*possibilites.length));
    }
    return result;    
}
function changeColors(){
    var squares= document.getElementById("square");
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = getRandomColor();
    }
}
function addSquare() {
    var squarearea = document.getElementById("squarearea");
    var newSquare = document.createElement("div");
    
    var size = parseInt(Math.random()*11)+45;
    newSquare.style.width = size+"px";
    newSquare.style.height = size+"px";
    
    var areaWidth=700;
    var areaHeight=300;

    var maxLeft = areaWidth - size;
    var maxTop = areaHeight - size;

    newSquare.style.left = parseInt(Math.random()* (maxLeft + 1)) + "px";
    newSquare.style.top = parseInt(Math.random()* (maxtop + 1)) + "px";
    newSquare.style.backgroundColor = getRandomColor();

    newSquare.onclick = function(){
        var currentZ = parseInt(newSquare.style.zIndex) || 0;
        if (currentZ !== maxZ){
            maxZ++;
            newSquare.style.zIndex= maxZ;
        }else{
            squarearea.removeChild(newSquare);
        }
        squarearea.appendChild(newSquare);
    }

    newSquare.className="square";
    newSquare.style.left = parseInt(Math.random()*651)+"px";
    newSquare.style.top = parseInt(Math.random()*251)+"px";
    squarearea.appendChild(newSquare);

}
