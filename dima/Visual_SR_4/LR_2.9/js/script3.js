//Task 3
let x = 0, y
let interval, expression
let xid = 'image'
function curvemove(expr, time) {
    interval = setInterval(() => {move()}, time)
    expression = expr
    y = expression(x)
}
function move() {
    x++
    y = expression(x)
    document.all[xid].style.top = y + 'px'
    document.all[xid].style.left = x + 'px'

    if (x > window.innerWidth || y > window.innerHeight) {
        clearInterval(interval)
        document.all[xid].style.top = '50px'
        document.all[xid].style.left = '10px'
    }
}
curvemove(x => 100 + 50 * Math.sin(0.03 * x), 10)