// minimum of function of one variable

x=-5:0.1:1;
y=x.^4+3*x.^3-13*x.^2-6*x+26;
plot2d(x,y);
xtitle('График функции f(x)=x^4+3x^3-13x^2-6x+26', 'X', 'Y');
xgrid();

// optim prepare
// hmm, strange, useless function
function [f, g, ind] = costf(x, ind)
	// costf должна возвращать функцию f, ее градиент g
	// f - функция от вектора неизвестных x, минимум которой ищется
	// g - градиент функции f (вектор частной производной f по x)
	f = gg(x);
	g = numdiff(gg, x);
endfunction

// функция, в которой будет формироваться функция f и ее производная g
function [f, g, ind] = fi(x, ind)
	f=x^4+3*x^3-13*x^2-6*x+26
	g=4*x^3+9*x^2-26*x-6
endfunction

// начальное приближение
y0=-2;

[fmin, xmin]=optim(fi, y0)
