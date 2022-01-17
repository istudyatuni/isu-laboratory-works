// Z = sin(t) * cos(t), cut where |Z| > 0.5
// not work
t=linspace(-%pi,%pi,40);
// not sure about .* (by element multiplication)
// if just *, error about inconsistent sizes
z=sin(t).*cos(t);
z1=find(abs(z)>0.5);
z(z1)=%inf*z1;
plot3d1(t,t,z);
