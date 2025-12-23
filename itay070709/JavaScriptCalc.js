function checkans() {
    var num1 = document.getElementById("num").value;
    alert(num1);
}
function random() {
    var num1rnd = parseInt(Math.random() * 10) + 1;
    var num2rnd = parseInt(Math.random() * 10) + 1;
    document.getElementById("numrnd").value = n1rnd;
    document.getElementById("numrnd2").value = n2rnd;
}
function calc() {
    var sol = parseInt(document.getElementById("solve").value);
    var num1 = parseInt(document.getElementById("numrnd").value);
    var num2 = parseInt(document.getElementById("numrnd2").value);

    if (num1 + num2 == sol) {
        document.getElementById("span1").innerHTML = "כל הכבוד";
    }
    else {
        document.getElementById("span1").innerHTML = "טעות";
    }

}

function reroll() {
    var random1 = parseInt(Math.random() * 100) + 1;
    var random2 = parseInt(Math.random() * 100) + 1;
    var random3 = parseInt(Math.random() * 100) + 1;
    var random4 = parseInt(Math.random() * 100) + 1;
    var random5 = parseInt(Math.random() * 100) + 1;
    var random6 = parseInt(Math.random() * 100) + 1;
    var random7 = parseInt(Math.random() * 100) + 1;
    var random8 = parseInt(Math.random() * 100) + 1;
    var random9 = parseInt(Math.random() * 100) + 1;
    var random10 = parseInt(Math.random() * 100) + 1;
    document.getElementById("plus1").value = random1;
    document.getElementById("plus2").value = random2;
    document.getElementById("minus1").value = random3;
    document.getElementById("minus2").value = random4;
    document.getElementById("multi1").value = random5;
    document.getElementById("multi2").value = random6;
    document.getElementById("div1").value = random7;
    document.getElementById("div2").value = random8;
    document.getElementById("leftdiv1").value = random9;
    document.getElementById("leftdiv2").value = random10;
}
function check() {
    var sol1 = parseInt(document.getElementById("ans1").value);
    var num1 = parseInt(document.getElementById("plus1").value);
    var num2 = parseInt(document.getElementById("plus2").value);
    var sol2 = parseInt(document.getElementById("ans2").value);
    var num3 = parseInt(document.getElementById("minus1").value);
    var num4 = parseInt(document.getElementById("minus2").value);
    var sol3 = parseInt(document.getElementById("ans3").value);
    var num5 = parseInt(document.getElementById("multi1").value);
    var num6 = parseInt(document.getElementById("multi2").value);
    var sol4 = parseFloat(document.getElementById("ans4").value);
    var num7 = parseFloat(document.getElementById("div1").value);
    var num8 = parseFloat(document.getElementById("div2").value);
    var sol5 = parseInt(document.getElementById("ans5").value);
    var num9 = parseInt(document.getElementById("leftdiv1").value);
    var num10 = parseInt(document.getElementById("leftdiv2").value);

    if (num1 + num2 == sol1) {
        document.getElementById("span2").innerHTML = "כל הכבוד";
    }
    else {
        document.getElementById("span2").innerHTML = "טעות";
    }
    if (num3 - num4 == sol2) {
        document.getElementById("span3").innerHTML = "כל הכבוד";
    }
    else {
        document.getElementById("span3").innerHTML = "טעות";
    }
    if (num5 * num6 == sol3) {
        document.getElementById("span4").innerHTML = "כל הכבוד";
    }
    else {
        document.getElementById("span4").innerHTML = "טעות";
    }
    if (num7 / num8 == sol4) {
        document.getElementById("span5").innerHTML = "כל הכבוד";
    }
    else {
        document.getElementById("span5").innerHTML = "טעות";
    }
    if (num9 % num10 == sol5) {
        document.getElementById("span6").innerHTML = "כל הכבוד";
    }
    else {
        document.getElementById("span6").innerHTML = "טעות";
    }
}