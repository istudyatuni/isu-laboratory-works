// linear programming

// linpro is from quapro module, but i cannot install it on scilab 6.x
c=[0;-1;-2;1];
A=[3 -1 0 0; 0 1 -2 0; 0 0 4 -1; -5 0 0 -1];
b=[2; -1; 3; -6];
ci=[0; 0; 0; 0];
[x, kl, f]=linpro(c, A, b, ci, [])
