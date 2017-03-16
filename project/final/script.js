//interactiveprototype3
document.addEventListener("DOMContentLoaded", function (event) {

    var simp = document.getElementById('simp');
    var paper = document.getElementById('paper');

    simp.addEventListener('mousedown', function () {
        paper.src = 'paper_simp.png';
        simp.src = 'ma_simp_r.png';
        trad.src = 'ma_trad.png';
    });

    var trad = document.getElementById('trad');
    var paper = document.getElementById('paper');

    trad.addEventListener('mousedown', function () {
        paper.src = 'paper_trad.png';
        trad.src = 'ma_trad_r.png';
        simp.src = 'ma_simp.png';
    });

    var corner = document.getElementById('corner');
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    corner.addEventListener('mousedown', function(){

context.clearRect(0, 0, canvas.width, canvas.height);
        window.location.reload()
    });

    var add = document.getElementById('add');

    add.addEventListener('mousedown', function () {
        alert('Practice a new character?');
    });

    var share = document.getElementById('share');

    share.addEventListener('mousedown', function () {
        alert('Save image?');
    });

});