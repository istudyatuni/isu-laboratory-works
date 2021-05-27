//Task two
let dx = 0.2, dy = 0
let interval
let xid = 'image'
function init_move() {
    interval = setInterval(function () {move()}, 1)
}
function move() {
    let x = parseFloat(document.all[xid].style.left)
    let y = parseFloat(document.all[xid].style.top)
    document.all[xid].style.top = (y + dy) + 'px'
    document.all[xid].style.left = (x + dx) + 'px'

    if (x > 1000) {
        clearInterval(interval)
    }
}
init_move()