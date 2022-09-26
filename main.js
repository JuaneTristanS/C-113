function preload() {
}

function setup() {
    canvas = createCanvas(600, 380);
    canvas.position(110, 150);
    video = createCapture(VIDEO);
    video.hide();

    filter_color = "";
}

function take_snapshot() {
    save("mytintedimage.png")
}

function draw() {
    image(video, 0, 0, 600, 380);
    tint(filter_color);
}

function tint_filter() {
    tint_color = document.getElementById("color_name").value;
}