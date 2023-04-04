# round()

Return **number** rounded to **ndigits** precision after the decimal point.

If **ndigits** is omitted or is `None`, it returns the nearest integer to its input.

For the built-in types supporting `round()`, values are rounded to the closest multiple of 10 to the power minus **ndigits**. If two multiples are equally close, rounding is done toward the even choice (so, for example, both `round(0.5)` and `round(-0.5)` are `0`, and `round(1.5)` is `2`). 

Any integer value is valid for **ndigits** (positive, zero, or negative).

### Syntax

```python
round(number)
round(number, ndigits=None)
```

### Examples

```python
>>> round(1.5) # 2
>>> round(2.2) # 2
>>> round(2.5) # 2
>>> round(2.7) # 3
>>> round(3.5) # 4
>>> round(3.14159265359, 2) # 3.14
```