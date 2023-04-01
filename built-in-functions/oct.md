# oct()

Convert an integer number to an octal string prefixed with “0o”. The result is a valid Python expression. If **x** is not a Python [`int`](/built-in-types/int.md) object, it has to define an `__index__()` method that returns an integer.

### Syntax
```python
oct(x)
```

### Examples
```python
>>> oct(8) # '0o10'
>>> oct(-56) # '-0o70'
```