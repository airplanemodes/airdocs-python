# bin()
Convert an integer number to a binary string prefixed with “0b”. If **x** is not a Python `int` object, it has to define an `__index__()` method that returns an integer.

### Syntax
```python
bin(integer)
```

### Examples
Integers as arguments:
```python
bin(2) # '0b10'
bin(-4) # '-0b100'
bin(255) # '0b11111111'
```

The result string content is a valid Python expression:
```python
>>> 0b10 # 2
```
---
!> The function will return `TypeError` in case of passing a non-integer value as an argument.