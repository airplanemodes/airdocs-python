# str.strip()

Return a copy of the string with the leading and trailing characters removed.

The **chars** argument is a string specifying the set of characters to be removed. If omitted or `None`, the **chars** argument defaults to removing whitespace.

?> The **chars** argument is not a prefix or suffix. Rather, all combinations of its values are stripped.

### Syntax

```python
str.strip()
str.strip(chars)
```

### Examples

```python
>>> '   spacious   '.strip() # 'spacious'
```
