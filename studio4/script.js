//timeisonmyside
document.addEventListener("DOMContentLoaded", function (event) {

    var one = document.getElementById('one');
    var answer = document.getElementById('answer');
    var close = document.getElementById('close');


    one.addEventListener('click', function () {
        answer.style.display = "block";
        // add a fade up?
    })

    close.addEventListener('click', function () {
        answer.style.display = "none";
    })


    var one = document.getElementById('one');
    var tip = document.getElementById('tip');

    var tipTimer;

    one.addEventListener('mouseover', function () {
        console.log('mouseover');
        tipTimer = setTimeout(showtip, 100);
    });

    one.addEventListener('mouseout', function () {
        console.log('mouseout');
        clearTimeout(tipTimer);
        tip.style.opacity = 0;
    });

    function showtip() {
        console.log('message');
        tip.style.opacity = 1;
    }

    var two = document.getElementById('two');
    var tip2 = document.getElementById('tip2');

    two.addEventListener('mouseover', function () {
        console.log('mouseover');
        tipTimer = setTimeout(showtip2, 100);
    });

    two.addEventListener('mouseout', function () {
        console.log('mouseout');
        clearTimeout(tipTimer);
        tip2.style.opacity = 0;
    });

    function showtip2() {
        console.log('message');
        tip2.style.opacity = 1;
    }

    var three = document.getElementById('three');
    var tip3 = document.getElementById('tip3');

    three.addEventListener('mouseover', function () {
        console.log('mouseover');
        tipTimer = setTimeout(showtip3, 100);
    });

    three.addEventListener('mouseout', function () {
        console.log('mouseout');
        clearTimeout(tipTimer);
        tip3.style.opacity = 0;
    });

    function showtip3() {
        console.log('message');
        tip3.style.opacity = 1;
    }
    
    var four = document.getElementById('four');
    var tip4 = document.getElementById('tip4');

    four.addEventListener('mouseover', function () {
        console.log('mouseover');
        tipTimer = setTimeout(showtip4, 100);
    });

    four.addEventListener('mouseout', function () {
        console.log('mouseout');
        clearTimeout(tipTimer);
        tip4.style.opacity = 0;
    });

    function showtip4() {
        console.log('message');
        tip4.style.opacity = 1;
    }
});