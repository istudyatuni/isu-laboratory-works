---
title: Самостоятельная работа № 4
subtitle: Компьютерное моделирование
---
\clearpage

# Лабораторная работа 7. Решение нелинейных уравнений в Scilab.

1. Решение нелинейного уравнения.

$$f(x)=-15x^3-2x^2+2x$$

```scilab
a0=-15; a1=-2; a2=2; a3=0;
function y1 = f1(x)
	y1=a0*x^3 + a1*x^2 + a2*x + a3;
endfunction

x=-10:0.1:10;
plot(x,f1(x)); xgrid;
```

![](1.png)

$f(x)=0\text{ при }x=0$, проверяем

```scilab
x0=0; // approximate root
x1=fsolve(x0, f1)
title('Корни: x1 = ' + string(x1));
```

![](2.png)

2. Решение системы из двух нелинейных уравнений.

$$f_1(x)=-15x^3-2x^2+2x$$
$$f_2(x)=40\cdot\lvert\cos(x)\rvert$$
$$f_3(x) = f_2(x)-f_1(x)$$

Зададим функции и нарисуем

```scilab
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
```

![](3.png)

Приближенные корни для $f_3(x)=0\text{: }x=-1.2$. Проверим

```scilab
x0=-1.2;
x1=fsolve(x0, f3);

title('Корни x1 = ' + string(x1));
```

![](4.png)

# Лабораторная работа 8. Работа с полиномами.

1. Формирование полинома по коэффициентам степеней и корням полинома.

```scilab
V=[12,26,3,9];

// V interpreted as set of coefficients
p1=poly(V,'x','c')

// V interpreted as roots
p2=poly(V,'x','r')
// p2 = 8424 -4770x +795x^2 -50x^3 +x^4

roots(p1)
// ans  =
//    0.0598505 + 1.7145074i
//    0.0598505 - 1.7145074i
//   -0.4530343 + 0.i

roots(p2)
// ans  =
//   26. + 0.i
//   12. + 0.i
//   9.  + 0.i
//   3.  + 0.i
```
