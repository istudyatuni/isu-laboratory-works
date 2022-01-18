// f(x, y) = 10(y − x)^2 − (1 + x^2)^2

// начальное приближение
x0=[-5; 5];

function y=gg(x)
	y=10*(x(2) - x(1))^2 - (1 + x(1)^2)^2;
endfunction

function [f, g, ind] = cst(x, ind)
	f=gg(x);
	// g=numdiff(gg,x);
	// numdiff is deprecated in favor of numderivative
	g=numderivative(gg, x);
endfunction

[f, xopt]=optim(cst, x0)
