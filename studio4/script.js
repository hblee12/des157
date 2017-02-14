//timeisonmyside
document.addEventListener("DOMContentLoaded", function (event) {

    var one = document.getElementById('one');
    var tip = document.getElementById('tip');
    var two = document.getElementById('two');
    var tip2 = document.getElementById('tip2');
    var three = document.getElementById('three');
    var tip3 = document.getElementById('tip3');
    var four = document.getElementById('four');
    var tip4 = document.getElementById('tip4');
    var audio = document.getElementById('audio');
    

    //audio
    one.addEventListener('click', play);
    function play(){
        var audio = document.getElementById("audio");
        audio.play();
    }
    
    //button change
    one.addEventListener('mousedown', function () {
        one.style.backgroundColor = 'green';
    });

    one.addEventListener('mouseup', function () {
        one.style.backgroundColor = 'green';
    });
    
    two.addEventListener('mousedown', function () {
        two.style.backgroundColor = 'green';
    });

    two.addEventListener('mouseup', function () {
        two.style.backgroundColor = 'green';
    });
    
    three.addEventListener('mousedown', function () {
        three.style.backgroundColor = 'green';
    });

    three.addEventListener('mouseup', function () {
        three.style.backgroundColor = 'green';
    });
    
    four.addEventListener('mousedown', function () {
        four.style.backgroundColor = 'green';
    });

    four.addEventListener('mouseup', function () {
        four.style.backgroundColor = 'green';
    });

    //tips
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

    two.addEventListener('mouseover', function () {
        console.log('mouseover');
        tipTimer = setTimeout(showtip2, 500);
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

    three.addEventListener('mouseover', function () {
        console.log('mouseover');
        tipTimer = setTimeout(showtip3, 500);
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

    four.addEventListener('mouseover', function () {
        console.log('mouseover');
        tipTimer = setTimeout(showtip4, 500);
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