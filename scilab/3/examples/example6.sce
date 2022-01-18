// minimum of function of many variables
// f(x, y) = 100(y - x^2)^2 + (1 - x^2)^2 - функция Розенброка

// hmm, useless again
function [f, g, ind] = costf(x, ind)
	// f - функция от вектора неизвестных x, минимум которой ищется
	f = gg();
	// g - градиент функции f (вектор частной производной)
	g = numdiff(gg, x);
endfunction

// начальное приближение
x0=[-2; 2];

function y=gg(x)
	y=100*(x(2) - x(1)^2)^2 + (1 - x(1))^2;
endfunction

function [f, g, ind] = cst(x, ind)
	f=gg(x);
	// g=numdiff(gg,x);
	// numdiff is deprecated in favor of numderivative
	g=numderivative(gg, x);
endfunction

[f, xopt]=optim(cst, x0)
// => xopt = 1.0000000, 1.0000000 (кажется даже точнее чем в методичке)
// => f = 5.378D-17
