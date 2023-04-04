# str.rstrip()

Return a copy of the string with trailing characters removed.

The **chars** argument is a string specifying the set of characters to be removed. If omitted or `None`, the **chars** argument defaults to removing whitespace.

?> The **chars** argument is not a suffix. Rather, all combinations of its values are stripped.

### Syntax

```python
str.rstrip()
str.rstrip(chars)
```

### Example

```python
>>> '   spacious   '.rstrip() # '   spacious'
```