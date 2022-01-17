// mesh
// Z = 5y^2 − x^2
[x y]=meshgrid(-2:2,-3:3);
z=5*y.^2-x.^2;
mesh(x,y,z);
