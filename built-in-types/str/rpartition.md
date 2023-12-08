# str.rpartition()

Split the string at the last occurrence of **sep**, and return a 3-tuple containing the part before the separator, the separator itself, and the part after the separator.

If the separator is not found, return a 3-tuple containing two empty strings, followed by the string itself.

### Syntax

```python
str.rpartition(sep)
```

### Examples

```python
>>> "hello".rpartition("l") # ('hel', 'l', 'o')
```