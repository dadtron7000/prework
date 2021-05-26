var box = document.getElementById("box");
var growAmountEl = document.getElementById("growAmount");
// var toggle1 =false;
// var growAmount = parseInt(growAmountEl.textContent);
// var growAmountHeight = growAmountEl.offsetHeight;
// var growAmountWidth = growAmountEl.offsetWidth;
// var growAmount = growAmountEl.value;

function growBtnClick(){

    // if (!isBig){
    //     box.style.height = "250px";
    //     box.style.width = "250px";
    //     box.style.display = "block";
    //     isBig = true;
    // }
    // else {
    //     box.style.height = "50px";
    //     box.style.width = "50px";
    //     box.style.display = "block";
    //     isBig = false;
    // }
    
    //var growAmount = parseInt(growAmountEl.textContent);

    // var growAmountHeight = growAmountEl.offsetHeight;
    // var growAmountWidth = growAmountEl.offsetWidth;
    
    var growAmount = parseInt(growAmountEl.value);
    var height = box.offsetHeight + growAmount;
    var width = box.offsetWidth + growAmount;

    box.style.height = height + 'px';
    box.style.width = width + 'px';
    box.style.display = "block";
}

function shrinkBtnClick(){
    var growAmount = parseInt(growAmountEl.value);

     var height = box.offsetHeight - growAmount;
    if(height < 1) height = 1;

    var width = box.offsetWidth - growAmount;
    if(width < 1) width = 1;

    box.style.height = height + "px";
    box.style.width = width + "px";
    box.style.display = "block";
}

function blueBtnClick(){
    box.style.backgroundColor = "blue";
    box.style.display = "block";
    box.style.opacity = "100%";
}

function fadeBtnClick(){
    // var toggle1 =false;

    // if (toggle1 = false) {
    //     box.style.opacity = "30%";
    //     box.style.display = "block";
    //     toggle1 = true;
    // } 
    // else {
    //     box.style.opacity = "100%";
    //     box.style.display = "block";
    //     toggle1 = false;
    // }
    box.style.opacity = "30%";
    box.style.display = "block";
}

function moveBtnClick(){
    box.style.margin = "250px";
    box.style.display = "block";
}

function moveBackBtnClick(){
    box.style.margin = "25px";
    box.style.display = "block";
}

function vanishBtnClick(){
    box.style.display = "none"; 
}

function resetBtnClick(){
    box.style.height = "150px";
    box.style.width = "150px";
    box.style.backgroundColor = "orange";
    box.style.opacity = "100%";
    box.style.margin = "25px";
    box.style.display = "block";
    
}