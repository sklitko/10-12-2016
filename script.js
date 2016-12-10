var tenis = document.querySelector('.tenis');
var box = document.querySelector('.box');

var mLeft = 0;
var mTop = 0;
var gFlag = true;
var vFlag = true;
var i = Math.random();
var y = Math.random();

var tenisX = 0;

document.onmousemove = function (event) {
    if (event.clientX < document.body.clientWidth - 40) {
        tenis.style.left = event.clientX - 50 + 'px';
        tenisX = event.clientX;
    }
}


var timer = setInterval(function () {

    if (gFlag)
        mLeft += 3 * i;
    else
        mLeft -= 3 * i;

    if (vFlag)
        mTop += 3 * y;
    else mTop -= 3 * y;

    box.style.top = mTop + 'px';
    box.style.left = mLeft + 'px';

    if (mLeft > document.body.clientWidth - 100)
        gFlag = false;
    else if (mLeft < 0)
        gFlag = true;

    if (mTop > document.body.clientHeight - 110 && (mLeft < tenisX + 100) && (mLeft > tenisX - 100) ) {
        vFlag = false;
        //alert("GAME OVER");

    }
    else if (mTop < 0)
        vFlag = true;
    else if (mTop > document.body.clientHeight - 100) {
        alert("Game Over!!!");
    }


    //console.log((mLeft < tenisX + 100) && (mLeft > tenisX - 100));



}, 5);



