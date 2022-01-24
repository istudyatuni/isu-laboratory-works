// from 7.1.sce
a0=-15; a1=-2; a2=2; a3=0;
function y1 = f1(x)
	y1=a0*x^3 + a1*x^2 + a2*x + a3;
endfunction
// -- //

function y2 = f2(x)
	y2 = 40 * abs(cos(x));
endfunction

function y3 = f3(x)
	y3 = f2(x) - f1(x);
endfunction

x=-3:0.1:3;
plot(x,f1(x),x,f2(x)); xgrid;

x0=-1.2;
x1=fsolve(x0, f3);

title('Корни x1 = ' + string(x1));
