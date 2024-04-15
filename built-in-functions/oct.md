# oct()

Convert an integer number to an octal string prefixed with “`0o`”.

If **x** is not a Python [`int`](/built-in-types/int/) object, it has to define an `__index__()` method that returns an integer.

!> The function will return [`TypeError`](/exceptions/TypeError.md) in case of passing a non-integer value as an argument.

### Syntax

```python
oct(x)
```

### Examples

Integers as arguments:

```python
>>> oct(8) # '0o10'
>>> oct(-56) # '-0o70'
```

The result string content is a valid Python expression:

```python
>>> 0o12 # 10
```
