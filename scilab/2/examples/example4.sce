// polar plot ρ = 3cos(5φ) и ρ1 = 3cos(3φ)
fi=0:0.01:2*%pi;
ro=3*cos(5*fi);ro1=3*cos(3*fi);
polarplot(fi,ro,style=color("red"));
polarplot(fi,ro1,style=color("blue"));
