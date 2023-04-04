# chr()

Return the string representing a character whose Unicode code point is the integer **i**. This is the inverse of [`ord()`](/built-in-functions/ord.md).

The valid range for the argument is from 0 through 1,114,111 (0x10FFFF in base 16).

!> [`ValueError`](/exceptions/ValueError.md) will be raised if **i** is outside that range.

### Syntax

```python
chr(i)
```

### Examples

```python
chr(97) # 'a'
chr(8364) # '€'
```
