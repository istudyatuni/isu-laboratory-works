// files

// open
// r+ is open in read/write mode
// [fd,err]=mopen('file.txt', 'r+')

// write
// mfprintf(fd, '', '')

// read
// A=mfscanf(f, s1)

// close
// mclose(fd)

// example

// write

N=3; M=4;
A=[2 4 6 7; 6 3 2 1; 11 12 34 10];
[f, err]=mopen('file.txt','w');
// write matrix sizes
mfprintf(f, '%d\t%d\n', N, M);

for i=1:N
	for j=1:M
		// write A by element
		mfprintf(f, '%g\t', A(i,j));
	end
	// newline
	mfprintf(f, '\n');
end
mclose(f);

// read

f=mopen('file.txt', 'r');
N=mfscanf(f, '%d');
M=mfscanf(f, '%d');

for i=1:N
	for j=1:M
		A(i,j)=mfscanf(f, '%g');
	end
end
mclose(f);
