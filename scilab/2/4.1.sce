// lab 4 task 1, var 2

// not work
// x=[-2:0.1:2];
// y=[-2:0.1:2];
// z=cos(2.*x+y)+y.*cos(x-y);
// plot3d1(x,y,z,-125,51)
// colorbar(-3,3)

[x y]=meshgrid(-20:20,-30:30);
z=cos(2.*x+y)+y.*cos(x-y);
// surf is colorful, mesh is just sceleton
surf(x,y,z);
