# str.isascii()

Return `True` if the string is empty or all characters in the string are ASCII, `False` otherwise.

ASCII characters have code points in the range U+0000-U+007F.

### Syntax

```python
str.isascii()
```

### Examples

```python
>>> "123".isascii()    # True
>>> "123abc".isascii() # True
>>> "123#$%".isascii() # True
```
