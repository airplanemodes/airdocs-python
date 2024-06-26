# hex()

Convert an integer number to a lowercase hexadecimal string prefixed with “`0x`”.

If **x** is not a Python [`int`](/built-in-types/int/) object, it has to define an `__index__()` method that returns an integer.

!> The function will return [`TypeError`](/exceptions/TypeError.md) in case of passing a non-integer value as an argument.

### Syntax

```python
hex(x)
```

### Examples

Integers as an argument:

```python
>>> hex(4)  # '0x4'
>>> hex(16) # '0x10'
```

A variable as an argument:

```python
>>> x = 800
>>> hex(x) # '0x320'
```

The result string content is a valid Python expression:

```python
>>> 0x10 # 16
```
