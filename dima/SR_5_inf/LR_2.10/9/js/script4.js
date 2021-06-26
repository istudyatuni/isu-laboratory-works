//Task four
let expression
const discret = 1
const thickness = 2

let color_style = ''
function curve() {
    let x = 0
    let y = expression(x)
    let images = ''
    while (x < window.innerWidth) {
        if (y < window.innerHeight) {
            let img = `<img src="blue-pixel.bmp" style="position:absolute; top:${y}px; left:${x}px; filter:${color_style}" width="${thickness}" height="${thickness}">`
            images += img
        }
        x += discret
        y = expression(x)
    }
    document.write(images)
    document.title = 'Press F5 to reload'
}
function draw() {
    let f = document.forms['func'].elements

    const type = Array.from(f)
        .filter((e) => e.checked)[0].value
    switch (type) {
        case 'square': expression = x => 100 + 50 * Math.pow(0.02 * (x - 200), 2); break;
        case 'cube': expression = x => 100 + 50 * Math.pow(0.02 * (x - 200), 3); break;
        case 'sin': expression = x => 100 + 50 * Math.sin(0.02 * x); break;
        case 'cos': expression = x => 100 + 50 * Math.cos(0.02 * x); break;
    }

    const color = f['color'].value
    switch (color) {
        case 'black': color_style = 'grayscale(1)'; break;
        case 'blue': break;
        case 'red': color_style = 'hue-rotate(90deg)'; break;
        case 'yellow': color_style = 'invert(1)'; break;
    }
    curve()
}