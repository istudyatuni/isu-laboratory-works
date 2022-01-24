// Решение нелинейного уравнения
function y1 = f1(x);
	y1=x+3*(x-1)^2-2;
endfunction

x=0:0.1:2;
plot(x,f1(x)); xgrid; // Графики
x0=0.2;
x1=fsolve(x0,f1)

// Корень 1
x0=1.4;
x2=fsolve(x0,f1)

// Корень 2
rezult='x1 = ' + string(x1) + ', x2= ' + string(x2);
title(rezult);
