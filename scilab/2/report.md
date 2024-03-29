---
title: Самостоятельная работа № 2
subtitle: Компьютерное моделирование
---
\clearpage

# Лабораторная работа №3. Построение двумерных графиков в Scilab.

Scilab поставляется следующими утилитами:

- `scilab` - сам Scilab (GUI)
- `scilab-cli` - CLI интерфейс
- `scilab-adv-cli` - CLI интерфейс с поддержкой графиков (как я понял). Я буду использовать эту.

**Вариант 2**

1. Построить точечный и ступенчатый графики функции $2 \sin(x)$ на промежутке $[0;3]$ с шагом $0.2$ квадратом и нанести на этот же график пары точек $(1;0.9), (0.5;0.8), (1;1.5), (1.5;1),(3;0)$ кружками.

<!-- see 3.1.sce -->
```scilab
x=[0:0.2:3];
y=2*sin(x);
plot2d(x,y,-0);
plot2d2(x,y);

// (p)oints
px=[1, 0.5, 1, 1.5, 3];
py=[0.9, 0.8, 1.5, 1, 0];
plot2d(x,y,-9);
```

![](1.png)

2. Построить полярные графики функций
$\rho=2 \sin(\frac{4 \varphi}{3})$
и
$\rho=4 \cos(8 \varphi-10)$

```scilab
fi=0:0.01:2*%pi;

// ρ = 2 sin(4φ / 3)
ro1=2*sin((4*fi)/3);
polarplot(fi,ro1,style=color("red"));

// ρ = 4 cos(8φ − 10)
ro2=4*cos(8*fi - 10);
polarplot(fi,ro2,style=color("blue"));
```

![](2.png)

\clearpage

# Лабораторная работа №4. Построение трехмерных графиков в Scilab.

*функция `plot3d1` у меня не заработала (совсем, даже примеры из методички), так что для рисования использую `meshgrid`*

1. Постройте трехмерный график функции

$$f(x,y)=\cos(2x+y)+y\ast\cos⁡(x−y)$$

```scilab
[x y]=meshgrid(-20:20,-30:30);
z=cos(2.*x+y)+y.*cos(x-y);

// surf is colorful, mesh is just sceleton
surf(x,y,z);
```

![](3.png)

2. Постройте трехмерный график функция двух переменных $z=f(x,y),z=x\ast\cos(y)+y\ast\sin⁡(x)$. Проведите заливку поверхности. Поэкспериментируйте с разными цветовыми схемами и представлениями заливки и линий и выберите наиболее понравившуюся.

```scilab
[x y]=meshgrid(-20:20,-30:30);
z=x.*cos(y)+y.*sin(x);
surf(x,y,z);
```

![](4.png)
