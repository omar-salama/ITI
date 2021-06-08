var ctx = document.querySelector("#canvas").getContext("2d");
var angel = 15;
var vangel = 15;
function drawFan() {
    ctx.fillStyle = "rgba(135, 206, 235, 0.25)";
    ctx.save();
    angel += 40;
    ctx.translate(247, 253);
    ctx.rotate((angel * Math.PI) / 180);
    ctx.translate(-247, -253);
    ctx.fillRect(250, 150, 40, 100);
    ctx.restore();
    if (angel > 2455) {
        vangel = 15
        console.log("testing");
        test(2)
        clearInterval(timer)

    }

}
function clearFans() {
    if (angel > 555) {
        console.log("test");


        clearInterval(timer)
        ctx.fillStyle = "rgba(255,255,255,0.25)";
        ctx.save();
        vangel += 40;
        ctx.translate(247, 253);
        ctx.rotate((vangel * Math.PI) / 180);
        ctx.translate(-247, -253);
        ctx.fillRect(250, 150, 40, 100);
        ctx.restore();
        if (vangel > 2455) {
            angel = 15
            test(1)

            clearInterval(timer1)

        }
    }
}
drawFan()
test(1)
var timer;
var timer1;
function test(x) {
    if (x === 1) {
        timer = setInterval(drawFan, 100);
        clearInterval(timer1)
    }


    else {
        timer1 = setInterval(clearFans, 100);
        clearInterval(timer)
        console.log("ADSDSA");
    }
}
