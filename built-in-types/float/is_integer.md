# float.is_integer()

Return `True` if the float instance is finite with integral value, and `False` otherwise.

?> Two methods support conversion to and from hexadecimal strings. Since Python’s floats are stored internally as binary numbers, converting a float to or from a decimal string usually involves a small rounding error. In contrast, hexadecimal strings allow exact representation and specification of floating-point numbers. This can be useful when debugging, and in numerical work.

### Syntax

```python
float.is_integer()
```

### Examples

```python
>>> (-2.0).is_integer() # True
>>> (3.2).is_integer() # False
```
