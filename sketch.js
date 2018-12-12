function setup() {
    createCanvas(windowWidth, windowHeight);//vollflaechig
}

function draw() {
    var sec = second();
    var min = minute();
    var h = hour();

    var zehnerMinute = ('' + min)[0];
    var einerMinute = min.toString().split('').pop();

    var firstHour = ('' + h)[0];
    var lastHour = h.toString().split('').pop();

    background(0, 0, 0);
    strokeWeight(10);

    if (sec < 1) {
        r = random(255);
        g = random(255);
        b = random(255);
        fill(r, g, b);
    }

    for (i = 0; i < einerMinute; i++) { // 00:01
        rect(0, i * height / 9, width / 4, height / 9);
    }

    for (i = 0; i < zehnerMinute; i++) { // 00:10
        rect(1 * width / 4, i * height / 5, width / 4, height / 5);
    }

    for (i = 0; i < lastHour; i++) { // 01:00
        rect(2 * width / 4, i * height / 9, width / 4, height / 9);
    }

    for (i = 0; i < firstHour; i++) { // 10:00
        rect(3 * width / 4, i * height / 2, width / 4, height / 2);
    }
}