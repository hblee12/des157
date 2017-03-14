//interactiveprototype3
document.addEventListener("DOMContentLoaded", function (event) {

    /*tool.fixedDistance = 30;

    var path;
    var strokeEnds = 1;

    function onMouseDown(event) {
        path = new Path();
        path.fillColor = {
            hue: Math.random() * 360,
            saturation: 1,
            brightness: 1
        };
    }

    var lastPoint;

    function onMouseDrag(event) {
        // If this is the first drag event,
        // add the strokes at the start:
        if (event.count == 0) {
            addStrokes(event.middlePoint, event.delta * -1);
        } else {
            var step = event.delta / 2;
            step.angle += 90;

            var top = event.middlePoint + step;
            var bottom = event.middlePoint - step;

            path.add(top);
            path.insert(0, bottom);
        }
        path.smooth();

        lastPoint = event.middlePoint;
    }

    function onMouseUp(event) {
        var delta = event.point - lastPoint;
        delta.length = tool.maxDistance;
        addStrokes(event.point, delta);
        path.closed = true;
        path.smooth();
    }

    function addStrokes(point, delta) {
        var step = delta.rotate(90);
        var strokePoints = strokeEnds + 1;
        point -= step / 2;
        step /= strokePoints - 1;
        for (var i = 0; i < strokePoints; i++) {
            var strokePoint = point + step * i;
            var offset = delta * (Math.random() * 0.2 + 0.1);
            if (i % 1) {
                offset *= -1;
            }
            strokePoint += offset;
            path.insert(0, strokePoint);
        }
    }

    /*
    var tool;
    var path;
    var minSize = 5;
     
    tool.maxDistance = 20;

    function onMouseDrag(event) {
        // If the user dragged more then minSize:
        if (event.delta.length > minSize) {
            // If there is no path, make one:
            if (!path) {
                path = new Path({
                    fillColor: 'black'
                });
                path.add(event.lastPoint);
            }

            var step = event.delta / 2;
            step.angle = step.angle + 90;

            // The top point: the middle point + the step rotated by 90 degrees:
            //   -----*
            //   |
            //   ------
            var top = event.middlePoint + step;

            // The bottom point: the middle point - the step rotated by 90 degrees:
            //   ------
            //   |
            //   -----*
            var bottom = event.middlePoint - step;

            path.add(top);
            path.insert(0, bottom);
            path.smooth();
        } else {
            // If the user dragged too slowly:

            // If there is currently a path, close it
            if (path) {
                path.add(event.point);
                path.closed = true;
                path.smooth();

                // Set path to null (nothing) so the path check above
                // will force a new path next time the user drags fast enough:
                path = null;
            }
        }
    }

    function onMouseUp(event) {
        if (path) {
            path.add(event.point);
            path.closed = true;
            path.smooth();

            // Set path to null (nothing) so the path check above
            // will force a new path next time the user drags fast enough:
            path = null;
        }
    }*/


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
    var paper_blank = document.getElementById('paper_blank');

    corner.addEventListener('mousedown', function () {
        alert('Are you sure you want to delete?');
    });

    var add = document.getElementById('add');

    add.addEventListener('mousedown', function () {
        alert('Practice a new character?');
    });

    var brush = document.getElementById('brush');
    var brush2 = document.getElementById('brush2');

    brush.addEventListener('mousedown', function () {
        brush.src = 'brush.png';
        brush2.src = 'brush2_short.png';
    });

    brush2.addEventListener('mousedown', function () {
        brush2.src = 'brush2.png';
        brush.src = 'brush_short.png';
    });
    
});