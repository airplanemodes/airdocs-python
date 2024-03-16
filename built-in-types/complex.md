# complex

Complex numbers have a real and imaginary part, which are each a floating point number. To extract these parts from a complex number **z**, use `z.real` and `z.imag`.

?> The standard library includes the additional numeric types `fractions.Fraction`, for rationals, and `decimal.Decimal`, for floating-point numbers with user-definable precision.

Appending `'j'` or `'J'` to a numeric literal yields an imaginary number (a complex number with a zero real part) which you can add to an integer or float to get a complex number with real and imaginary parts.
