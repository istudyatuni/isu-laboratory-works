// found all pairs of equal numbers
a=[1,2,3,1,4,5,3,2,1,1];
size=length(a);
for i=1:size-1
	for j=i+1:size
		if a(i) == a(j) then
			disp(strcat(string([i, j]), ", "))
		end
	end
end
