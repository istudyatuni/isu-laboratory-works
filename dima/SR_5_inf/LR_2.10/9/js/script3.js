//Task 3
let x = 0, y
let interval, expression
let xid = '#image'
function curvemove(expr, time) {
    interval = setInterval(() => {move()}, time)
    expression = expr
    y = expression(x)
}
function move() {
    x++
    y = expression(x)
    $(xid).css('top', y)
    $(xid).css('left', x)

    if (x > window.innerWidth || y > window.innerHeight) {
        clearInterval(interval)
        $(xid).css('top', 50)
        $(xid).css('left', 100)
    }
}
curvemove(x => 100 + 50 * Math.sin(0.03 * x), 10)