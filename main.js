x = "";
y = "";
milkshake = "rainbowm milkshake.jpg";


rec = new window.webkitSpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "system can hear you so start TALKING !!";
    rec.start();
}
rec.onresult = function (food) {
    console.log(food);
    content = food.results[0][0].transcript;
    document.getElementById("status").innerHTML = " you said " + content;
    if (content == "milkshake") {
        milkshake == true;
    }

}

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if (milkshake == true) {
        x = 100;
        y = 100;
        image(milkshake, x, y, 50, 50);
        document.getElementById("status").innerHTML = "milkshake has been drawn";
    }

}