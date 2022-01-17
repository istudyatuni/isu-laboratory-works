// Z = 5y^2 − x^2
x=[-2:0.1:2];
y=[-3:0.1:3];
for i=1:length(x)
	for j=1:length(y)
		z(i,j)=5*y(j)^2-x(i)^2;
	end
end

// not work, size of z is (41, 2001)
// because of O(n^2), so j is very big
plot3d1(x,y,z,-125,51);
colorbar(-3,3)
