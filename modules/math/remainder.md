# math.remainder()

Return the IEEE 754-style remainder of **x** with respect to **y**.

For finite **x** and finite nonzero **y**, this is the difference `x - n*y`, where `n` is the closest integer to the exact value of the quotient `x / y`. If `x / y` is exactly halfway between two consecutive integers, the nearest *even* integer is used for `n`. The remainder `r = remainder(x, y)` thus always satisfies `abs(r) <= 0.5 * abs(y)`.

Special cases follow IEEE 754: in particular, `remainder(x, math.inf)` is **x** for any finite **x**, and `remainder(x, 0)` and `remainder(math.inf, x)` raise [`ValueError`](/exceptions/ValueError.md) for any non-NaN **x**. If the result of the remainder operation is zero, that zero will have the same sign as **x**.

On platforms using IEEE 754 binary floating-point, the result of this operation is always exactly representable: no rounding error is introduced.

### Syntax

```python
math.remainder(x, y)
```