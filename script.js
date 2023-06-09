const button = document.getElementById("randomize");
const button2 = document.getElementById("visualize");
const button3 = document.getElementById("selection");

const container = document.getElementById("container");
const canvas = document.getElementById("canvas1");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

let dataset = 100;
let dataArray = [];

function randomize() {
    for(let i = 0; i < dataset; i++) {
        dataArray[i] = i+1;
    }

    for (var i = dataArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = dataArray[i];
        dataArray[i] = dataArray[j];
        dataArray[j] = temp;
    }

    console.log(dataArray);
}

function sort() {
    dataArray.sort(function(a, b){return a - b});
    console.log(dataArray);
}

function animate() {
    let x = 0;
    const barWidth = canvas.width/dataset;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    for(let i = 0; i < dataArray.length; i++) {
        barHeight = dataArray[i]*2;
        ctx.fillStyle = "red";
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x+= barWidth+10;
    }
}

button.addEventListener("click", function() {
    for(let i = 0; i < 100; i++) {
        randomize();
        animate();
    }
});

button2.addEventListener("click", function() {
    sort();
    animate();
});

button3.addEventListener("click", function() {
    console.log("hello");
})