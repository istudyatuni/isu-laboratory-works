// lab 3 task 2, var 2

fi=0:0.01:2*%pi;

// ρ = 2 sin(4φ / 3)
ro1=2*sin((4*fi)/3);
polarplot(fi,ro1,style=color("red"));

// ρ = 4 cos(8φ − 10)
ro2=4*cos(8*fi - 10);
polarplot(fi,ro2,style=color("blue"));
