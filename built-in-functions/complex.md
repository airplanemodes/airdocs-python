# complex()

Return a complex number with the value **real** + **imag** * 1j or convert a string or number to a complex number. If the first parameter is a string, it will be interpreted as a complex number and the function must be called without a second parameter. The second parameter can never be a string. Each argument may be any numeric type (including complex). If **imag** is omitted, it defaults to zero and the constructor serves as a numeric conversion like [`int()`](/built-in-functions/int.md) and [`float()`](/built-in-functions/float.md). If both arguments are omitted, returns `0j`.

?> For a general Python object `x`, `complex(x)` delegates to `x.__complex__()`. If `__complex__()` is not defined then it falls back to `__float__()`. If `__float__()` is not defined then it falls back to `__index__()`.

!> When converting from a string, the string must not contain whitespace around the central `+` or `-` operator. For example, `complex('1+2j')` is fine, but `complex('1 + 2j')` raises [`ValueError`](/exceptions/ValueError.md).

### Syntax

```python
complex()
complex(real=0, imag=0)
complex(string)
```

### Examples

```python
```
