# math.nan

A floating-point “not a number” (NaN) value. 

Equivalent to the output of `float('nan')`.

Due to the requirements of the IEEE-754 standard, `math.nan` and `float('nan')` are not considered to equal to any other numeric value, including themselves. To check whether a number is a NaN, use the [`isnan()`](/modules/math/isnan.md) function to test for NaNs instead of [`is`](/operators/is.md) or [`==`](/operators/equal.md).

### Syntax

```python
math.nan
```

### Examples

```python
>>> import math
>>> math.nan == math.nan # False
>>> float('nan') == float('nan') # False
>>> math.isnan(math.nan) # True
>>> math.isnan(float('nan')) # True
```