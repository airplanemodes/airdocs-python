# math.frexp()

Return the mantissa and exponent of **x** as the pair `(m, e)`. 

**m** is a float and **e** is an integer such that `x == m * 2**e` exactly.

If **x** is zero, returns `(0.0, 0)`, otherwise `0.5 <= abs(m) < 1`. This is used to “pick apart” the internal representation of a float in a portable way.

### Syntax

```python
math.frexp(x)
```