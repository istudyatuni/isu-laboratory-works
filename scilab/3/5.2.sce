// -- calculate sum of series -- //
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
