// work with polynomials
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
