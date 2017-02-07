// studio3

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    // capture the images into variables
    var headphones = document.getElementById('headphones');
    var watch = document.getElementById('watch');
    var boba = document.getElementById('boba');
    var laptop = document.getElementById('laptop');
    var pen = document.getElementById('pen');
    var answer = document.getElementById('answer');
    var answer_boba = document.getElementById('answer_boba');
    var answer_laptop = document.getElementById('answer_laptop');
    var answer_watch = document.getElementById('answer_watch');
    var answer_pen = document.getElementById('answer_pen');
    var close = document.getElementById('close');

    //create mouseover function
    headphones.addEventListener('mouseover', function () {
        headphones.style.opacity = 1;
        headphones.src = "headphones2.png";
    });

    headphones.addEventListener('mouseout', function () {
        headphones.style.opacity = 1;
        headphones.src = "headphones.png";
    });

    watch.addEventListener('mouseover', function () {
        watch.style.opacity = 1;
        watch.src = "watch2.png";
    });

    watch.addEventListener('mouseout', function () {
        watch.style.opacity = 1;
        watch.src = "watch.png";
    });

    boba.addEventListener('mouseover', function () {
        boba.style.opacity = 1;
        boba.src = "boba2.png";
    });

    boba.addEventListener('mouseout', function () {
        boba.style.opacity = 1;
        boba.src = "boba.png";
    });


    laptop.addEventListener('mouseover', function () {
        laptop.style.opacity = 1;
        laptop.src = "laptop2.png";
    });

    laptop.addEventListener('mouseout', function () {
        laptop.style.opacity = 1;
        laptop.src = "laptop.png";
    });


    pen.addEventListener('mouseover', function () {
        pen.style.opacity = 1;
        pen.src = "pen2.png";
    });

    pen.addEventListener('mouseout', function () {
        pen.style.opacity = 1;
        pen.src = "pen.png";
    });

    headphones.addEventListener('click', function () {
        answer.style.display = "block";
        close.style.display = "block";
        // add a fade up?
    })

    close.addEventListener('click', function () {
        answer.style.display = "none";
    })

    close.addEventListener('click', function () {
        close.style.display = "none";
    })

    boba.addEventListener('click', function () {
        answer_boba.style.display = "block";
        close.style.display = "block";
        // add a fade up?
    })

    close.addEventListener('click', function () {
        answer_boba.style.display = "none";
    })

    close.addEventListener('click', function () {
        close.style.display = "none";
    })

    laptop.addEventListener('click', function () {
        answer_laptop.style.display = "block";
        close.style.display = "block";
        // add a fade up?
    })

    close.addEventListener('click', function () {
        answer_laptop.style.display = "none";
    })

    close.addEventListener('click', function () {
        close.style.display = "none";
    })

    watch.addEventListener('click', function () {
        answer_watch.style.display = "block";
        close.style.display = "block";
        // add a fade up?
    })

    close.addEventListener('click', function () {
        answer_watch.style.display = "none";
    })

    close.addEventListener('click', function () {
        close.style.display = "none";
    })
    
    pen.addEventListener('click', function () {
        answer_pen.style.display = "block";
        close.style.display = "block";
        // add a fade up?
    })

    close.addEventListener('click', function () {
        answer_pen.style.display = "none";
    })

    close.addEventListener('click', function () {
        close.style.display = "none";
    })
});