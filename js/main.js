var i = 0;
var txt = "Hello I'm Santiago";
var speed = 500;

window.onload = function typeWriter() {
    if (i < txt.length) {
        document.getElementById("sant").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}



