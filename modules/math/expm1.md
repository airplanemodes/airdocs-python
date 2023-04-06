# math.expm1()

Return *e* raised to the power **x**, minus 1.

Here *e* is the base of natural logarithms.

### Syntax

```python
math.expm1(x)
```

### Examples

For small floats **x**, the subtraction in `exp(x) - 1` can result in a significant loss of precision. The `expm1()` function provides a way to compute this quantity to full precision:

```python
from math import exp, expm1

# gives result accurate to 11 places
print(exp(1e-5) - 1) # 1.0000050000069649e-05

# result accurate to full precision
print(expm1(1e-5)) # 1.0000050000166668e-05
```