# math.trunc()

Return **x** with the fractional part removed, leaving the integer part.

This rounds toward 0: `trunc()` is equivalent to [`floor()`](/modules/math/floor.md) for positive **x**, and equivalent to [`ceil()`](/modules/math/ceil.md) for negative **x**. If **x** is not a float, delegates to `x.__trunc__`, which should return an Integral value.

### Syntax

```python
math.trunc(x)
```