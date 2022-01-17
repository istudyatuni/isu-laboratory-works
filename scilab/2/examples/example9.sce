// plot3d (plotting), contourf (imaging on surface)
// Z = sin(x) * cos(y)
t=-%pi:0.2:%pi;
deff('[z]=Surf(x,y)','z=sin(x)*cos(y)');
subplot(121);
z=feval(t,t,Surf);
plot3d1(t,t,z,80,15);
xtitle('plot3d1');
subplot(122);
contourf(t,t,z,10,10:20,strf="121");
colorbar(-%pi,%pi);
xtitle('contourf','X','Y');
