# float()

Return a floating point number constructed from a number or string **x**.

If the argument is a string, it should contain a decimal number, optionally preceded by a sign, and optionally embedded in whitespace. The optional sign may be `'+'` or `'-'`. A `'+'` sign has no effect on the value produced. The argument may also be a string representing a NaN (not-a-number), or positive or negative infinity.

If no argument is given, `0.0` is returned.

?> For a general Python object `x`, `float(x)` delegates to `x.__float__()`. If `__float__()` is not defined then it falls back to `__index__()`.

### Syntax

```python
float()
float(x=0.0)
```

### Examples

```python
```