navigator.geolocation.getCurrentPosition((position) => {
    document.getElementById("geo1").innerHTML = position.coords.latitude;
    document.getElementById("geo2").innerHTML = position.coords.longitude;
}, (e) => {console.error('error', e)})

let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');

c.fillStyle = 'rgba(51, 0, 51)';
c.fillRect(0, 0, 500, 500);

c.fillStyle = 'rgba(0, 51, 0)';

c.beginPath();
c.moveTo(200,110);
c.lineTo(140,298);
c.lineTo(290,178);
c.lineTo(110,178);
c.lineTo(260,298);

c.fill()

let grad = c.createLinearGradient(30, 0, 20, 40);
grad.addColorStop(0.0,'blue');
grad.addColorStop(1.0,'yellow');
c.fillStyle = grad

c.font = '25pt itallic'
c.fillText('Dmitry Alexandrovich Krylov', 50, 70)