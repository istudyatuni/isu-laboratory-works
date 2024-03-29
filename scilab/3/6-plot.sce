// f(x, y) = 10(y − x)^2 − (1 + x^2)^2
// [x y]=meshgrid(-10000:100:10000,-10000:100:10000);
// z=10*(y - x).^2-(1 - x.^2).^2;
// mesh(x,y,z);

[x y]=meshgrid(-5:5,-5:5);
z=10*(y - x).^2-(1 - x.^2).^2;
surf(x,y,z);
