//
// setInterval(function () {
//     var now = new Date();
//     //console.log(now);
//     var hour = now.getHours();
//     var min = now.getMinutes();
//     var sec = now.getSeconds();
//
//
//
// },1000);


video.oninput = function () {
    var data = this.value.substring(this.value.indexOf('?v=', 0) + 3);
    v.src = 'https://www.youtube.com/embed/' + data;
};


function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

num.oninput = function () {
    var num = fib(this.value);
    video.value=num;
};
//alert( fib(3) ); // 2
//alert( fib(7) ); // 13
// fib(77); // не запускаем, подвесит браузер

