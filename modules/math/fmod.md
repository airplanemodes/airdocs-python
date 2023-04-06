# math.fmod()

Return `fmod(x, y)`, as defined by the platform C library.

Note that the Python expression `x % y` may not return the same result. The intent of the C standard is that `fmod(x, y)` be exactly (mathematically, to infinite precision) equal to `x - n*y` for some integer `n` such that the result has the same sign as `x` and magnitude less than `abs(y)`. Python’s `x % y` returns a result with the sign of `y` instead, and may not be exactly computable for float arguments.

For example, `fmod(-1e-100, 1e100)` is `-1e-100`, but the result of Python’s `-1e-100 % 1e100` is `1e100-1e-100`, which cannot be represented exactly as a float, and rounds to the surprising `1e100`. For this reason, function `fmod()` is generally preferred when working with floats, while Python’s `x % y` is preferred when working with integers.

### Syntax

```python
math.fmod(x, y)
```