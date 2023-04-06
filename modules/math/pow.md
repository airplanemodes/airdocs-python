# math.pow()

Return **x** raised to the power **y**.

Exceptional cases follow the IEEE 754 standard as far as possible. In particular, `pow(1.0, x)` and `pow(x, 0.0)` always return `1.0`, even when **x** is a zero or a NaN. If both **x** and **y** are finite, **x** is negative, and **y** is not an integer then `pow(x, y)` is undefined, and raises [`ValueError`](/exceptions/ValueError.md).

Unlike the built-in `**` operator, `math.pow()` converts both its arguments to type [`float`](/built-in-types/float/). Use `**` or the built-in [`pow()`](/built-in-functions/pow.md) function for computing exact integer powers.

### Syntax

```python
math.pow(x, y)
```