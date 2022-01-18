// sum
s=0;
for i=1:length(x)
	s=s+x(i);
end

// mult
p=1;
for i=1:length(x)
	p=p*x(i);
end

// matrix sum
s=0;
[N,M]=size(A);
for i=1:N
	for j=1:M
		s=s+a(i,j);
	end
end
disp(s);

// matrix mult
p=1;
[N,M]=size(A);
for i=1:N
	for j=1:M
		p=p*a(i,j);
	end
end

// max(min) search
Nmax=1;
Max=a(Nmax);
for i=2:N
	if x(i)>Max
		Max=x(i);
		Nmax=i;
	end;
end;

// search min and index of min
Nmin=1; Lmin=1;
Min=a(Nmin,Lmin);
for i=1:N
	for j=1:M
		if a(i,j)<Min
			Min=a(i,j);
			Nmin=i; Lmin=j;
		end;
	end;
end;

// bubble sort
x=[-3 5 7 49 -8 11 -5 32 -11];
for i=1:length(x)-1
	for j=1:length(x)-i
		if x(j) > x(j+1)
			// swap
			b=x(j);
			x(j)=x(j+1);
			x(j+1)=b;
		end;
	end;
end;
disp(x);

// remove element with index m
x=[3 2 1 5 4 6 8 7];
disp(x);
n=length(x);
// index input
m=input('m=');
// shift
for i=m:n-1
	x(i)=x(i+1);
end;
// remove last (n)
x(:,n)=[];
n=n-1;
disp(x);
