// Решение системы нелинейных уравнений
function y1=f1(x);
	y1=x+3*(x-1)^2-2;
endfunction

function y2=f2(x);
	y2=x-1;
endfunction

function y3=f3(x);
	y3=f1(x)-f2(x);
endfunction

x=0:0.1:2;
plot(x,f1(x),x,f2(x)); xgrid; // Графики

x0=0.4;
x1=fsolve(x0,f3)

// Корень 1
x0=1.5;
x2=fsolve(x0,f3)

rezult='x1 = ' + string(x1) + ' x2= ' + string(x2);
title(rezult);
