// 4 plots: y = sin(2x), z = cos(3x), u = cos(sin(2x)), v = sin(cos(3x))
// each in its own coordinate system

x=[-10:0.01:10];
y=sin(2*x); z=cos(3*x); u=cos(sin(2*x)); v=sin(cos(3*x));
rect=[min(x),-1,max(x),1];
tics=[2,11,10,5];
plotframe(rect,tics,[%t,%t],["Function y=sin(2x)","X","Y"], [0,0,0.5,0.5]);
plot(x,y);
plotframe(rect,tics,[%f,%f],["Function y=cos(3x)","X","Y"], [0.5,0,0.5,0.5]);
plot(x,z);
plotframe(rect,tics,[%f,%f],["Function y=cos(sin(2x))","X","Y"], [0,0.5,0.5,0.5]);
plot(x,u);
plotframe(rect,tics,[%t,%t],["Function y=sin(cos(3x))","X","Y"], [0.5,0.5,0.5,0.5]);
plot(x,v);
