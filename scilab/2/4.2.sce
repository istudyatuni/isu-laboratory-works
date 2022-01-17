// lab 4 task 2, var 2
[x y]=meshgrid(-20:20,-30:30);
z=x.*cos(y)+y.*sin(x);
surf(x,y,z);
