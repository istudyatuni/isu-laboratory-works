---
title: Самостоятельная работа № 2
subtitle: Компьютерное моделирование
---
\clearpage

# Лабораторная работа №5. Программирование в Scilab.

*Основные конструкции языка*

```scilab
// if else
if condition then
	// body
elseif condition1 and condition2 or condition3 <= 3 then
	// body
else
	// body
end

// switch case
select select_expression
	case case_expression then
		// body
	else
		// body
end

// while
while condition,
	// body
end

// for
// start:step:end
// or, if step == 1: start:end
for x=xn:hx:xk
	// body
end
```

**Вариант 2.**

1. Найти все пары одинаковых значений среди четырех переменных.

*Сделал размер побольше, чтобы было больше чисел и повторений*

```scilab
size=10;
a=[1,2,3,1,4,5,3,2,1,1];
for i=1:size-1
	for j=i+1:size
		if a(i) == a(j) then
			disp(strcat(string([i, j]), ", "))
		end
	end
end
```

*Вывод*

```scilab
"1, 4"
"1, 9"
"1, 10"
"2, 8"
"3, 7"
"4, 9"
"4, 10"
"9, 10"
```

2. Вычислить сумму ряда $$H_1=x,...,H_n=-H_{n-1}\cdot\frac{(2n^2+1)x^2}{8n^4-20n^3+20n^2-6n}$$

```scilab
disp('Enter first number of series')
x=input('--> ');

function res = next(prev, n)
	res = prev*((2*n^2+1)*x^2)/(8*n^4-20*n^3+20*n^2-6*n)
endfunction

prev = x;
i = 2;
curr = next(prev, i);
res_sum = prev + curr;

while abs(curr - prev) > 10^-5,
	i = i + 1;
	prev = curr;
	curr = next(curr, i);

	res_sum = res_sum + curr;
end

disp(strcat([
	strcat(["prev", string(prev)], ": "),
	strcat(["curr", string(curr)], ": "),
	strcat(["sum", string(res_sum)], ": ")
], ", "))
```

*Вывод (для `x = 10`)*

```scilab
"prev: 0.0000092, curr: 0.0000007, sum: 41116.003"
```

\clearpage

# Лабораторная работа №6. Решение задач оптимизации.

**Вариант 2.**

Найти минимум функции нескольких переменных $$f(x,y)=10(y-x)^2-(1+x^2)^2$$

У этой функции минимум равен $-\infty$

```scilab
[x y]=meshgrid(-10000:100:10000,-10000:100:10000);
z=10*(y - x).^2-(1 - x.^2).^2;
mesh(x,y,z);
```

![](1.png)

*Попробуем найти минимум на участке, где он определён*

```scilab
[x y]=meshgrid(-5:5,-50:50);
```

![](2.png)

```scilab
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
```

*Вывод*

```
f = -1.80D+308
xopt = -5. 5.
```
