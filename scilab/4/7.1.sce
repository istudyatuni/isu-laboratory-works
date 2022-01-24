a0=-15; a1=-2; a2=2; a3=0;
function y1 = f1(x)
	y1=a0*x^3 + a1*x^2 + a2*x + a3;
endfunction

x=-10:0.1:10;
plot(x,f1(x)); xgrid;

x0=0; // approximate value
x1=fsolve(x0, f1)

title('Корни: x1 = ' + string(x1));
