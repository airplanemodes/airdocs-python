# str.lstrip()

Return a copy of the string with leading characters removed.

The **chars** argument is a string specifying the set of characters to be removed. If omitted or `None`, the **chars** argument defaults to removing whitespace.

?> The **chars** argument is not a prefix. Rather, all combinations of its values are stripped.

### Syntax

```python
str.lstrip()
str.lstrip(chars)
```

### Examples

```python
>>> '   spacious   '.lstrip() # 'spacious   '
```